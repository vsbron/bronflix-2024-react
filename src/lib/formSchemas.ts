import { z } from "zod";

// Schema for sign in form
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

// Schema for sign up form
export const signUpFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  confirmPassword: z.string().min(1, "Password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});;

// Schema for contact form
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, { message: "Select your age range" }),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
});