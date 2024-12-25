import { StatusCodes } from "http-status-codes";
import AppError from "../../../errors/app-error";
import { IServiceResponse } from "../../interfaces/service-response.type";
import { IAbout } from "./about.interfaces";
import About from "./about.models";

async function getAboutFromDb(): Promise<IServiceResponse> {
  const result = await About.findOne();

  return {
    status: StatusCodes.OK,
    success: true,
    message: "About successfully retrieved",
    data: result,
  };
}

async function createOrUpdateAboutIntoDb(
  payload: Partial<IAbout>
): Promise<IServiceResponse> {
  // Check if an About document exists
  const existingAbout = await About.findOne();

  let result;

  if (existingAbout) {
    // Update the existing document
    result = await About.findByIdAndUpdate(existingAbout._id, payload, {
      new: true,
    });
  } else {
    // Create a new document
    result = await About.create(payload);
  }

  if (!result) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to save About data");
  }

  return {
    success: true,
    message: "Operation successful",
    status: StatusCodes.OK,
    data: result,
  };
}

export const AboutServices = {
  createOrUpdateAboutIntoDb,
  getAboutFromDb,
};
