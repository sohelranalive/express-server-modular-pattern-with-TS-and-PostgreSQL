// import { NextFunction, Request, Response } from "express";
// import { pool } from "../config/db";

// // User exists middleware
// const isUserExits = async (req: Request, res: Response, next: NextFunction) => {
//   const { user_id } = req.body;

//   const userId = await pool.query(`SELECT * FROM users WHERE id = $1`, [
//     user_id,
//   ]);

//   if (!userId.rowCount) {
//     return res.status(400).json({
//       success: false,
//       message: "User ID not found",
//     });
//   }
//   next();
// };

// export default isUserExits;
