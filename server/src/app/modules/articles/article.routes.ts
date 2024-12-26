import { Router } from "express";
import Auth from "../../middlewares/auth";
import { ArticleControllers } from "./article.controllers";
import ValidationRequest from "../../middlewares/zod-validation";
import { ArticleValidations } from "./article.validations";

const router: Router = Router();

router.get("/", ArticleControllers.retrieveAllArticles);
router.get("/:_id", ArticleControllers.retrieveSingleArticle);

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

router.delete("/:_id", Auth(), ArticleControllers.deleteArticle);

export const articleRoutes = router;
