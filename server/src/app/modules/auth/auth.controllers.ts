import { Request, Response } from "express";
import catchAsync from "../../utils/catch-async";
import { AuthServices } from "./auth.services";

const login = catchAsync(async function (req: Request, res: Response) {
  const result = await AuthServices.loginIntoDb(req.body);

  res.status(result.status).json(result);
});

export const AuthControllers = {
  login,
};
