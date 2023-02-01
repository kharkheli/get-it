import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "Please provide a username"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: [true, "Please provide a password"],
    },
    email: {
      type: String,
      require: [true, "Please provide an email"],
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default UserSchema;
