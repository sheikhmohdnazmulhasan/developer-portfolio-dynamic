import { StatusCodes } from "http-status-codes";
import AppError from "../../../errors/app-error";
import { IServiceResponse } from "../../interfaces/service-response.type";
import { IArticle } from "./article.interfaces";
import Article from "./article.model";
import isValidValidObjectId from "../../../utils/check-valid-objectId";
import { isValidObjectId } from "mongoose";

async function retrieveAllArticlesFromDb(): Promise<IServiceResponse> {
  const result = await Article.find().sort({ createdAt: -1 });

  return {
    status: StatusCodes.OK,
    success: true,
    message: "Articles successfully retrieved",
    data: result,
  };
}

async function retrieveSingleArticleFromDb(
  _id: string
): Promise<IServiceResponse> {
  if (!isValidObjectId(_id))
    throw new AppError(400, "Invalid project id format");

  const result = await Article.findById(_id);

  if (!result) throw new AppError(404, "Article not found with that id");

  return {
    success: true,
    status: StatusCodes.OK,
    message: "Article successfully retrieved",
    data: result,
  };
}

async function createNewArticleIntoDb(
  payload: IArticle
): Promise<IServiceResponse> {
  const result = await Article.create(payload);

  if (!result) throw new AppError(400, "Bad Request");

  return {
    success: true,
    status: StatusCodes.CREATED,
    message: "New article successfully published",
    data: result,
  };
}

async function updateArticleIntoDb(
  _id: string,
  payload: Partial<IArticle>
): Promise<IServiceResponse> {
  if (!isValidValidObjectId(_id))
    throw new AppError(400, "Invalid articleId format");

  const result = await Article.findByIdAndUpdate(_id, payload, { new: true });

  return {
    status: StatusCodes.OK,
    success: true,
    message: "Article successfully updated",
    data: result,
  };
}

async function deleteArticleFromDb(_id: string): Promise<IServiceResponse> {
  if (!isValidObjectId(_id))
    throw new AppError(400, "Invalid articleId format");

  const isExist = await Article.findById(_id).lean();
  if (!isExist) throw new AppError(404, "Article not found with that id");

  const result = await Article.findByIdAndDelete(_id);

  return {
    status: StatusCodes.OK,
    success: true,
    message: "Article successfully deleted",
    data: result,
  };
}

export const ArticleServices = {
  createNewArticleIntoDb,
  updateArticleIntoDb,
  deleteArticleFromDb,
  retrieveAllArticlesFromDb,
  retrieveSingleArticleFromDb,
};
