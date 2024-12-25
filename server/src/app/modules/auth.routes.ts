import { Router } from "express";
import { AuthControllers } from "./auth.controllers";

const router: Router = Router();

router.post("/login", AuthControllers.login);

export const AuthRoutes = router;
