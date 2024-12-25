import { Request, Response } from "express";

import { AuthServices } from "./auth.services";
import catchAsync from "../../../utils/catch-async";

const login = catchAsync(async function (req: Request, res: Response) {
  const result = await AuthServices.loginIntoDb(req.body);

  if (result.success) {
    res.cookie("accessToken", result.data.token);
  }

  res.status(result.status).json(result);
});

export const AuthControllers = {
  login,
};
