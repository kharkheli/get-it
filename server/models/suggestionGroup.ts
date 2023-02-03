import mongoose, { Schema } from "mongoose";

const suggestionGroupSchema = new Schema(
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
    upVotes: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("SuggestionGroup", suggestionGroupSchema);
