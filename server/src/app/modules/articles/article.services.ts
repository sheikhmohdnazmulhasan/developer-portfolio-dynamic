import { StatusCodes } from "http-status-codes";
import AppError from "../../../errors/app-error";
import { IServiceResponse } from "../../interfaces/service-response.type";
import { IArticle } from "./article.interfaces";
import Article from "./article.model";

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

export const ArticleServices = {
  createNewArticleIntoDb,
};
