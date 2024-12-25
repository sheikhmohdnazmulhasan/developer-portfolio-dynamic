import { z } from "zod";

export const aboutValidationSchema = z.object({
  body: z.object({
    name: z.string().default("Sheikh Mohammad Nazmul Hasan"),
    bio: z.string().nonempty("Bio is required"),
    age: z.number().default(() => new Date().getFullYear() - 2003),
    designation: z.string().default("Full Stack Developer"),
    description: z.string().nonempty("Description is required"),
  }),
});
