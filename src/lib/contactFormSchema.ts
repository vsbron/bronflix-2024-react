import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.enum(["under 18", "18-30", "30-55", "over 55"]),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  comment: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
});
