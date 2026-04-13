import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    status: {
      type: String,
      enum: ["lost", "found"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);