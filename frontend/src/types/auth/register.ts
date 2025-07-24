import { z } from "zod";
import { LoginFormSchema } from "@/types/auth/login";

export const RegisterFormSchema = LoginFormSchema.extend({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "The name can be a maximum of 50 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(80, { message: "The last name can be a maximum of 80 characters." }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type RegisterFormProps = z.infer<typeof RegisterFormSchema>;
