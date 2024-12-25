import { Router } from "express";

import { AuthValidations } from "./auth.validation";
import ValidationRequest from "../../middlewares/zod-validation";
import { AuthControllers } from "./auth.controllers";

const router: Router = Router();

router.post(
  "/login",
  ValidationRequest(AuthValidations.loginValidationSchema),
  AuthControllers.login
);

export const AuthRoutes = router;
