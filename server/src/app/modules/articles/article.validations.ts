import { z } from "zod";

const createArticleValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    image: z.string().url("Image must be a valid URL"),
    tags: z.array(z.string().min(1, "Tag cannot be empty")),
    description: z.string().min(1, "Description is required"),
  }),
});

const updateArticleValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required").optional(),
    image: z.string().url("Image must be a valid URL").optional(),
    tags: z.array(z.string().min(1, "Tag cannot be empty")).optional(),
    description: z.string().min(1, "Description is required").optional(),
  }),
});

export const ArticleValidations = {
  createArticleValidationSchema,
  updateArticleValidationSchema,
};
