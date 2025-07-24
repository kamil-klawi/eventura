import { z } from "zod";
import { LoginFormSchema } from "@/types/auth/login";

export const ForgotPasswordSchema = LoginFormSchema.pick({
  email: true,
});

export type ForgotPasswordProps = z.infer<typeof ForgotPasswordSchema>;
