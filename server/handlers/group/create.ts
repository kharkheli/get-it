import { Request, Response } from "express";
import { Group } from "@server/models";

const create = async (req: Request, res: Response) => {
  try {
    const group = await Group.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Group created successfully",
      group,
    });
  } catch (err) {
    if (!err || typeof err !== "object") {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
    if (typeof err === "object" && "name" in err && err.name === "CastError") {
      return res.status(400).json({
        success: false,
        error: "Invalid user_id",
      });
    }
    if ("message" in err) {
      return res.status(400).json({
        success: false,
        error: err.message,
      });
    }
    return res.status(400).json({
      success: false,
      message: "invalid request",
    });
  }
};

export default create;
