import express from "express";
import { todoControllers } from "./todo.controllers";

const router = express.Router();

router.post("/", todoControllers.createTodo);
router.get("/", todoControllers.getAllTodo);
router.get("/:id", todoControllers.getSingleTodo);
router.put("/:id", todoControllers.updateTodo);
router.delete("/:id", todoControllers.deleteTodo);

export const todoRoutes = router;
