import { z } from "zod";

export const contactValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(50, { message: "Name must be less than 50 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters long" })
      .max(500, { message: "Message must be less than 500 characters" }),
  }),
});
