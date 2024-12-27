import { StatusCodes } from "http-status-codes";
import AppError from "../../../errors/app-error";
import { IServiceResponse } from "../../interfaces/service-response.type";
import { IProject } from "./project.interfaces";
import Project from "./project.model";
import { isValidObjectId } from "mongoose";

async function retrieveAllProjectsFromDb(): Promise<IServiceResponse> {
  const result = await Project.find().sort({ createdAt: -1 });

  return {
    status: StatusCodes.OK,
    success: true,
    message: "Project successfully retrieved",
    data: result,
  };
}

async function retrieveSingleProjectFromDb(
  _id: string
): Promise<IServiceResponse> {
  if (!isValidObjectId(_id))
    throw new AppError(400, "Invalid project id format");

  const result = await Project.findById(_id);

  if (!result) throw new AppError(404, "Project not found with that id");

  return {
    success: true,
    status: StatusCodes.OK,
    message: "Project successfully retrieved",
    data: result,
  };
}

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

async function deleteProjectFromDb(_id: string): Promise<IServiceResponse> {
  if (!isValidObjectId(_id))
    throw new AppError(400, "Invalid projectId format");

  const isExist = await Project.findById(_id).lean();
  if (!isExist) throw new AppError(404, "Project not found with that id");

  const result = await Project.findByIdAndDelete(_id);

  return {
    status: StatusCodes.OK,
    success: true,
    message: "Project successfully deleted",
    data: result,
  };
}

export const ProjectServices = {
  createNewProjectIntoDb,
  updateProjectIntoDb,
  deleteProjectFromDb,
  retrieveSingleProjectFromDb,
  retrieveAllProjectsFromDb,
};
