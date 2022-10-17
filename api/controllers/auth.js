// @ts-nocheck
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
export const register = async (req, res, next) => {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.phone }],
    });
    if (user) return next(createError(409, "User already exist"));

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    console.log("hello");
    const user = await User.findOne({
      $or: [
        { email: req.body.email_or_phone },
        { phone: req.body.email_or_phone },
      ],
    }).select("+password");
    if (!user) return next(createError(400, "Invalid username or password"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Invalid username or password"));
    const { password, ...otherDetails } = user._doc;

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
