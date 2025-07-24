import { z } from "zod";
import { LoginFormSchema } from "@/types/auth/login";

export const ResetPasswordSchema = LoginFormSchema.extend({
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" }),
  verifyCode: z
    .string()
    .min(6, { message: "Verification code is required." })
    .max(6, { message: "Verification code is required." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type ResetPasswordProps = z.infer<typeof ResetPasswordSchema>;
