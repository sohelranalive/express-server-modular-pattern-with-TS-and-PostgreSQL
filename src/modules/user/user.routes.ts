import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import { userControllers } from "./user.controllers";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/", userControllers.createUser);

router.get("/", auth("admin"), userControllers.getUser);

router.get("/:id", userControllers.getSingleUser);

router.put("/:id", userControllers.updateUserInfo);

router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
