import mongoose, { Schema, Error } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// schema for user
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
      unique: false,
      trim: true,
    },
    friends: {
      type: [String],
      default: [],
    },
    karma: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// ? Encrypt password using bcrypt
UserSchema.pre("save", async function () {
  if (!this.password) {
    throw new Error("Password is required");
  }
  if (this.password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  const secret = process.env.JWT_SECRET || "kalaboki";
  const expire = process.env.JWT_EXPIRE || "30d";
  if (!secret) {
    throw new Error("JWT secret is required");
  }
  if (!expire) {
    throw new Error("JWT expire is required");
  }
  return jwt.sign({ id: this._id, user: this.username }, secret, {
    expiresIn: expire,
  });
};

// check if password matches
UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;
