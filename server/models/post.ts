import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
    },
    body: {
      type: String,
      required: [true, "Please provide a body"],
      trim: true,
    },
    upVotes: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "User",
    },
    downVotes: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "User",
    },
    owner: {
      type: String,
    },
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    media: {
      type: [String],
      default: [],
    },
    votes: {
      type: Number,
      default: 0,
    },
    edited: {
      type: Boolean,
      default: false,
    },
    group_id: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: [true, "Please provide a group_id"],
    },
  },
  { timestamps: true }
);

export default model("Post", PostSchema);
