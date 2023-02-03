import { Request, Response } from "express";
import { Comment } from "@server/models";

const createComment = async (req: Request, res: Response) => {
  try {
    const { body, user_id, post_id } = req.body;
    const comment = {
      body,
      owner_id: user_id,
      votes: 1,
      upVotes: [user_id],
      post_id,
    };
    await Comment.create(comment);
    res.status(200).json({ message: "Comment created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default createComment;
