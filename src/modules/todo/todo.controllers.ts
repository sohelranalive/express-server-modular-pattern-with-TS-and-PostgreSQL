import { Request, Response } from "express";
import { todoServices } from "./todo.services";

const createTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.createTodo(req.body);
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getAllTodo();

    res.status(200).json({
      success: true,
      message: "All Todos retrived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getSingleTodo(req.params.id!);
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "Not todo found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Single Todo reterived successfully",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  const { title } = req.body;

  try {
    const result = await todoServices.updateTodo(title);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found for Update",
      });
    } else {
      res.status(200).json({
        success: true,
        message: " Todo Title Updated",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.deleteTodo(req.params.id!);
    if (result.rowCount == 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
        data: null,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      mess: error.message,
    });
  }
};

export const todoControllers = {
  createTodo,
  getAllTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
