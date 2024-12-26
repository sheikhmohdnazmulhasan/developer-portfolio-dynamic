import { z } from "zod";

export const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    image: z.string().url("Image must be a valid URL"),
    technologies: z.array(z.string().min(1, "Technology name is required")),
    live_preview: z.string().url("Live preview must be a valid URL"),
    source: z.string().url("Source must be a valid URL"),
  }),
});

export const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required").optional(),
    description: z.string().min(1, "Description is required").optional(),
    image: z.string().url("Image must be a valid URL").optional(),
    technologies: z
      .array(z.string().min(1, "Technology name is required"))
      .optional(),
    live_preview: z.string().url("Live preview must be a valid URL").optional(),
    source: z.string().url("Source must be a valid URL").optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
