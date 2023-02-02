import { Request, Response } from "express";
import { User } from "../../models";

const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      return res.status(400).send({ message: "Username is required" });
    }
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).send({ message: "Password is required" });
    }
    if (username.length < 4) {
      return res
        .status(400)
        .send({ message: "Username must be at least 4 characters" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .send({ message: "Password must be at least 6 characters" });
    }
    if (!email.includes("@")) {
      return res.status(400).send({ message: "Email must be valid" });
    }
    await User.create({ username, email, password });
    return res.status(201).send({ message: "User created" });
  } catch (err) {
    return res.status(500).send({ message: "Internal server Error" });
  }
};

export default register;
