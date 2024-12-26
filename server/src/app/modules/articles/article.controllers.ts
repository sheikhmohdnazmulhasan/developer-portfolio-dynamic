import { Request, Response } from "express";
import catchAsync from "../../../utils/catch-async";
import { ArticleServices } from "./article.services";

const createNewArticle = catchAsync(async function (
  req: Request,
  res: Response
) {
  const result = await ArticleServices.createNewArticleIntoDb(req.body);

  res.status(result.status).json(result);
});

export const ArticleControllers = {
  createNewArticle,
};
