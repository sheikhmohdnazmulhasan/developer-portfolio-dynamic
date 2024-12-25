import { StatusCodes } from "http-status-codes";

import { IUser } from "./auth.interfaces";
import User from "./auth.models";
import jwt, { Secret } from "jsonwebtoken";
import { IServiceResponse } from "../../interfaces/service-response.type";
import AppError from "../../../errors/app-error";
import config from "../../config";

async function loginIntoDb(payload: IUser): Promise<IServiceResponse> {
  const user = await User.findOne({
    email: payload.email,
  });

  if (!user) {
    throw new AppError(404, "Email Not Registered!");
  }

  const isCorrectPassword = await user.comparePassword(payload.password);

  if (!isCorrectPassword) {
    throw new AppError(401, "Wrong Password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    config.jwt_secret as Secret,
    {
      expiresIn: "7d",
    }
  );

  return {
    success: true,
    status: StatusCodes.OK,
    message: "Admin logged in success",
    data: {
      token,
      user,
    },
  };
}

export const AuthServices = {
  loginIntoDb,
};
