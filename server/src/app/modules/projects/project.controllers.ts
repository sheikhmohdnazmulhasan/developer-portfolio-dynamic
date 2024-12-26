import { Request, Response } from "express";
import catchAsync from "../../../utils/catch-async";
import { ProjectServices } from "./project.services";

const createNewProject = catchAsync(async function (
  req: Request,
  res: Response
) {
  const result = await ProjectServices.createNewProjectIntoDb(req.body);

  res.status(result.status).json(result);
});

export const ProjectControllers = {
  createNewProject,
};
