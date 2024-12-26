import { StatusCodes } from "http-status-codes";
import AppError from "../../../errors/app-error";
import { IServiceResponse } from "../../interfaces/service-response.type";
import { IProject } from "./project.interfaces";
import Project from "./project.model";
import { isValidObjectId } from "mongoose";

async function createNewProjectIntoDb(
  payload: IProject
): Promise<IServiceResponse> {
  const result = await Project.create(payload);

  if (!result) throw new AppError(400, "Bad Request");

  return {
    success: true,
    status: StatusCodes.CREATED,
    message: "New Project successfully published",
    data: result,
  };
}

async function updateProjectIntoDb(
  _id: string,
  payload: Partial<IProject>
): Promise<IServiceResponse> {
  if (!isValidObjectId(_id))
    throw new AppError(400, "Invalid projectId format");

  const result = await Project.findByIdAndUpdate(_id, payload, { new: true });

  return {
    status: StatusCodes.OK,
    success: true,
    message: "Project successfully updated",
    data: result,
  };
}

export const ProjectServices = {
  createNewProjectIntoDb,
  updateProjectIntoDb,
};
