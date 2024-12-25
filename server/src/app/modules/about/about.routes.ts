import { Router } from "express";
import { AboutControllers } from "./about.controllers";
import Auth from "../../middlewares/auth";

const router: Router = Router();

router.get("/", AboutControllers.getAbout);

router.put("/", Auth(), AboutControllers.createOrUpdateAbout);

export const AboutRoutes = router;
