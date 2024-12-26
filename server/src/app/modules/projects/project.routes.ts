import { Router } from "express";
import Auth from "../../middlewares/auth";
import { ProjectControllers } from "./project.controllers";
import ValidationRequest from "../../middlewares/zod-validation";
import { ProjectValidations } from "./project.validations";

const router: Router = Router();

router.get("/", ProjectControllers.retrieveAllProjects);
router.get("/:_id", ProjectControllers.retrieveSingleProject);

router.post(
  "/",
  Auth(),
  ValidationRequest(ProjectValidations.createProjectValidationSchema),
  ProjectControllers.createNewProject
);

router.patch(
  "/:_id",
  Auth(),
  ValidationRequest(ProjectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProject
);

router.delete("/:_id", Auth(), ProjectControllers.deleteProject);

export const ProjectRoutes = router;
