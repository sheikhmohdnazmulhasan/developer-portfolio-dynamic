import { Router } from "express";
import { AuthControllers } from "./auth.controllers";
import ValidationRequest from "../middlewares/zod-validation";
import { AuthValidations } from "./auth.validation";

const router: Router = Router();

router.post(
  "/login",
  ValidationRequest(AuthValidations.loginValidationSchema),
  AuthControllers.login
);

export const AuthRoutes = router;
