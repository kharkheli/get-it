import express from "express";

const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({ message: "Hello from server boo" });
});

export default router;
