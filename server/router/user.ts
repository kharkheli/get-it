import express from "express";
import { login } from "../handlers";

const router = express.Router();

router.post("/login", login);

export default router;
