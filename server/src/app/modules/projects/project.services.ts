import { StatusCodes } from "http-status-codes";
import AppError from "../../../errors/app-error";
import { IServiceResponse } from "../../interfaces/service-response.type";
import { IProject } from "./project.interfaces";
import Project from "./project.model";

async function createNewProjectIntoDb(
  payload: IProject
): Promise<IServiceResponse> {
  const result = await Project.create(payload);

  if (!result) throw new AppError(400, "Bad Request");

  return {
    success: true,
    status: StatusCodes.OK,
    message: "New Project successfully published",
    data: result,
  };
}

export const ProjectServices = {
  createNewProjectIntoDb,
};
