import mongoose from "mongoose";

// Define the Job schema
const jobSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    jobType: { type: String, required: false },
    location: { type: String, required: true },
    hybrid: { type: Boolean, required: true },
    jobFunction: { type: String, required: true },
    jobDescription: { type: String, required: true },
    project: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    id: { type: Number, required: true, unique: true }, // Ensure 'id' is numeric and unique
  },
  { timestamps: true }
);

// Static method to fetch jobs sorted by 'id' in ascending order
jobSchema.statics.fetchSortedJobs = async function () {
  try {
    const sortedJobs = await this.find({}).sort({ id: 1 }); // Sort by 'id' in ascending order
    return sortedJobs;
  } catch (error) {
    console.error("Error fetching sorted jobs:", error);
    throw error;
  }
};

// Create the Job model
const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;

