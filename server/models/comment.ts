import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
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
      required: [true, "Please provide an owner"],
    },
    owner_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Please provide an owner_id"],
      ref: "User",
    },
    votes: {
      type: Number,
      default: 0,
    },
    replies: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "Comment",
    },
    edited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
