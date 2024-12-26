import { Router } from "express";
import Auth from "../../middlewares/auth";

const router: Router = Router();

router.post("/", Auth());

export const articleRoutes = router;
