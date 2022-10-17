// @ts-nocheck
import User from "../models/user.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  try {
    const updations = req.body;
    const user = await User.findOne({
      _id: { $ne: req.params.id },
      $or: [{ email: updations.email }, { phone: updations.phone }],
    });
    if (user) return next(createError(409, "User already exist"));
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      updations.password = bcrypt.hashSync(updations.password, salt);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { ...updations } },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    console.log(req.params.id);
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({ isAdmin: false });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const blockUser = async (req, res, next) => {
  try {
    const blockOrUnblock = await User.findByIdAndUpdate(req.params.id, [
      {
        $set: {
          isBlocked: {
            $eq: [false, "$isBlocked"],
          },
        },
      },
    ]);
    res
      .status(200)
      .json(
        `User ${
          blockOrUnblock.isBlocked ? "blocked" : "unblocked"
        } successfully`
      );
  } catch (error) {
    next(error);
  }
};


