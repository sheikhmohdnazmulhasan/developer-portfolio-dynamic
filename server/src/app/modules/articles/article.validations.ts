import { z } from "zod";

export const createArticleValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    image: z.string().url("Image must be a valid URL"),
    tags: z.array(z.string().min(1, "Tag cannot be empty")),
    description: z.string().min(1, "Description is required"),
  }),
});

export const ArticleValidations = {
  createArticleValidationSchema,
};
