import express from "express";
import { createGroup } from "../handlers";

const router = express.Router();

router.post("/create", createGroup);

export default router;
