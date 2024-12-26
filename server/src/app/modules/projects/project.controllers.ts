import { Request, Response } from "express";
import catchAsync from "../../../utils/catch-async";
import { ProjectServices } from "./project.services";

const retrieveSingleProjectFromDb = catchAsync(async function (
  req: Request,
  res: Response
) {
  const result = await ProjectServices.retrieveSingleProjectFromDb(
    req.params._id
  );

  res.status(result.status).json(result);
});

const createNewProject = catchAsync(async function (
  req: Request,
  res: Response
) {
  const result = await ProjectServices.createNewProjectIntoDb(req.body);

  res.status(result.status).json(result);
});

const updateProject = catchAsync(async function (req: Request, res: Response) {
  const result = await ProjectServices.updateProjectIntoDb(
    req.params._id,
    req.body
  );

  res.status(result.status).json(result);
});

const deleteProject = catchAsync(async function (req: Request, res: Response) {
  const result = await ProjectServices.deleteProjectFromDb(req.params._id);

  res.status(result.status).json(result);
});

export const ProjectControllers = {
  createNewProject,
  updateProject,
  deleteProject,
  retrieveSingleProjectFromDb,
};
