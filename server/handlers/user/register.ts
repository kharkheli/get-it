import { Request, Response } from "express";
import { User } from "../../models";

const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    await User.create({ username, email, password });
    return res.status(201).send({ message: "User created" });
  } catch (err) {
    if (typeof err === "object" && err && "message" in err) {
      console.log(err.message);
    }
    return res.status(400).send({ message: "Invalid data" });
  }
};

export default register;
