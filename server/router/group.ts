import express from "express";
import { group } from "../handlers";

const { create } = group;

const router = express.Router();

router.post("/create", create);

export default router;
