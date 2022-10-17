import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      maxLength: 10,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    teamAndBackground: {
      type: String,
      required: true,
    },
    companyAndProducts: {
      type: String,
      required: true,
    },
    problemTryingToSolve: {
      type: String,
      required: true,
    },
    uniqueAboutSolution: {
      type: String,
      required: true,
    },
    competativeAdvantage: {
      type: String,
      required: true,
    },
    reveniewModel: {
      type: String,
      required: true,
    },
    potentialMarketSize: {
      type: String,
      required: true,
    },
    marketingStrategy: {
      type: String,
      required: true,
    },
    incubationType: {
      type: String,
      required: true,
    },
    buisnessProposal: {
      type: String,
      required: true,
    },
    applicationStatus: {
      type: String,
      default: "New",
      enum: ["New", "Pending", "Approved", "Declined"],
    },
    profileImg: {
      type: String,
    },

    slotBooked: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Company", companySchema);
