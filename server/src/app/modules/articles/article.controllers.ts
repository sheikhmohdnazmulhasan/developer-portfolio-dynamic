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

const updateArticle = catchAsync(async function (req: Request, res: Response) {
  const result = await ArticleServices.updateArticleIntoDb(
    req.params._id,
    req.body
  );

  res.status(result.status).json(result);
});

const deleteArticle = catchAsync(async function (req: Request, res: Response) {
  const result = await ArticleServices.deleteArticleFromDb(req.params._id);

  res.status(result.status).json(result);
});

export const ArticleControllers = {
  createNewArticle,
  updateArticle,
  deleteArticle,
};
