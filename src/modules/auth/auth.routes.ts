import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();

//http://localhost:5000/auth/login
router.post("/login", authController.loginUser);

export const authRoute = router;
