import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  console.log(req);

  return res.status(200).send({ message: "Hello from server boo" });
};

export { login };
