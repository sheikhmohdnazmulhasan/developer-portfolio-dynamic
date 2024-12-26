import { Router } from "express";
import Auth from "../../middlewares/auth";
import { ArticleControllers } from "./article.controllers";
import ValidationRequest from "../../middlewares/zod-validation";
import { ArticleValidations } from "./article.validations";

const router: Router = Router();

router.post(
  "/",
  Auth(),
  ValidationRequest(ArticleValidations.createArticleValidationSchema),
  ArticleControllers.createNewArticle
);

router.patch(
  "/:_id",
  Auth(),
  ValidationRequest(ArticleValidations.updateArticleValidationSchema),
  ArticleControllers.updateArticle
);

export const articleRoutes = router;
