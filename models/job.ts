import mongoose from "mongoose";

// Define the Job schema
const jobSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    role: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    hybrid: {
      type: Boolean,
      required: true,
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

  { timestamps: true }
);

// Static method to fetch jobs sorted by 'id'
jobSchema.statics.fetchSortedJobs = async function () {
  return await this.find({}).sort({ id: 1 }); // Sort by 'id' in ascending order
};

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
