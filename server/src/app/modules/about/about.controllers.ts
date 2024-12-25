import { Request, Response } from "express";
import catchAsync from "../../../utils/catch-async";
import { AboutServices } from "./about.services";

const getAbout = catchAsync(async function (req: Request, res: Response) {
  const result = await AboutServices.getAboutFromDb();
  res.status(result.status).json(result);
});

const createOrUpdateAbout = catchAsync(async function (
  req: Request,
  res: Response
) {
  const result = await AboutServices.createOrUpdateAboutIntoDb(req.body);
  res.status(result.status).json(result);
});

export const AboutControllers = {
  createOrUpdateAbout,
  getAbout,
};
