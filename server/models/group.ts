import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      trim: true,
    },
    members: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "User",
    },
    moderators: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "User",
    },
    creator_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Please provide a creator_id"],
      ref: "User",
    },
    category: {
      type: [String],
      required: [true, "Please provide a category"],
      trim: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Group", GroupSchema);
