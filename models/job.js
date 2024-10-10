import mongoose, { Mongoose } from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    hybrid: {
      type: Boolean,
      required: false,
    },
    jobFunction: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
