import { z } from "zod";
import { LoginFormSchema } from "@/types/auth/login";

export const VerifyCodeSchema = LoginFormSchema.pick({
  email: true,
}).extend({
  verifyCode: z
    .string()
    .min(6, { message: "The verification code you entered is not valid." })
    .max(6, { message: "The verification code you entered is not valid." }),
});

export type VerifyCodeProps = z.infer<typeof VerifyCodeSchema>;
