import { Router } from "express";
import { AboutControllers } from "./about.controllers";
import Auth from "../../middlewares/auth";
import ValidationRequest from "../../middlewares/zod-validation";
import { aboutValidationSchema } from "./about.validation";

const router: Router = Router();

router.get("/", AboutControllers.getAbout);

router.put(
  "/",
  Auth(),
  ValidationRequest(aboutValidationSchema),
  AboutControllers.createOrUpdateAbout
);

export const AboutRoutes = router;
