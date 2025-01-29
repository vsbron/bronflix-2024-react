import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, { message: "Select your age range" }),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
});
