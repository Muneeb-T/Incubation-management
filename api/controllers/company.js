import Company from "../models/company.js";
import { createError } from "../utils/error.js";
export const registerCompany = async (req, res, next) => {
  try {
    console.log(req.file);
    const newCompany = new Company({ user: req.user.id, ...req.body });
    const company = await newCompany.save();
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};

export const getApplications = async (req, res, next) => {
  try {
    const applications = await Company.find({
      applicationStatus:
        req.params.applicationStatus === "New" ? "New" : { $ne: "New" },
    }).populate("user");
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};

export const getCompany = async (req, res, next) => {
  try {
    const company = await Company.findById(req.params.id).populate("user");
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};

export const changeApplicationStatus = async (req, res, next) => {
  try {
    const changeStatus = await Company.findByIdAndUpdate(
      req.params.id,
      { $set: { applicationStatus: req.body.newStatus } },
      { new: true }
    );
    res.status(200).json(changeStatus);
  } catch (error) {
    next(error);
  }
};

export const getCompanyList = async (req, res, next) => {
  try {
    const companyList = await Company.find({
      applicationStatus: "Approved",
      slotBooked: null,
    });
    res.status(200).json(companyList);
  } catch (error) {
    next(error);
  }
};

export const bookSlot = async (req, res, next) => {
  try {
    const bookSlot = await Company.findByIdAndUpdate(req.body.company, {
      $set: { slotBooked: req.body.slot },
    });
    res.status(200).json(bookSlot);
  } catch (error) {
    next(error);
  }
};
