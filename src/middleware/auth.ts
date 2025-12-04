import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res
          .status(500)
          .json({ message: "No token found, youre not allowed to login" });
      }
      const decoded = jwt.verify(
        token,
        config.jwtSecret as string
      ) as JwtPayload;
      req.user = decoded;
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(500).json({
          error: "unautorized!!!",
        });
      }
      next();
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default auth;
