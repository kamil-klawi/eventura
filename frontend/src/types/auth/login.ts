import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.email({
    message: "The email address you entered is not valid",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" }),
});

export type LoginFormProps = z.infer<typeof LoginFormSchema>;
