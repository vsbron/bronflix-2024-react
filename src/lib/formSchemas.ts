import { z } from "zod";

// Schema for sign in form
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

// Schema for sign up form
export const signUpFormSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .nonempty("Confirm password is required")
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Schema for profile details form
export const editProfileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  title: z.string(),
  gender: z.enum(["N/A", "Female", "Male"]),
  birthday: z.date(),
});

// Schema for password change
export const passwordChangeFormSchema = z
  .object({
    currentPassword: z
      .string()
      .nonempty("Old password is required")
      .min(6, "Old password must be at least 6 characters"),
    password: z
      .string()
      .nonempty("New password is required")
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .nonempty("Confirm password is required")
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

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
