import { Request, Response } from "express";
import { User } from "../../models";
import { UserInterface } from "./type";

const login = async (req: Request, res: Response) => {
  try {
    const { identification, password } = req.body;
    const user: UserInterface | null = await User.findOne({
      $or: [{ email: identification }, { username: identification }],
    });
    if (!user) {
      return res
        .status(400)
        .send({ login: false, message: "Invalid credentials" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ login: false, message: "Invalid credentials" });
    }
    const token = user.getSignedJwtToken();
    return res.status(200).send({ login: true, token });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ login: false, message: "Internal server error" });
  }
};

export default login;
