import express from "express";
import { user } from "../handlers";

const { login, register } = user;

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;
