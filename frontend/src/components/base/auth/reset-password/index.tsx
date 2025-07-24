"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { FormFieldOTPCustom } from "@/components/custom/form-field-otp-custom";
import { FormFieldCustom } from "@/components/custom/form-field-custom";
import {
  ResetPasswordProps,
  ResetPasswordSchema,
} from "@/types/auth/reset-password";
import styles from "@/components/base/auth/auth-component.module.scss";

export default function ResetPasswordForm() {
  const router = useRouter();
  const form = useForm<ResetPasswordProps>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
      verifyCode: "",
      password: "",
      confirmPassword: "",
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: (data: ResetPasswordProps) =>
      api.post("/auth/reset-password", data).then((res) => res.data),
    onSuccess: () => {
      toast.success("Reset password successfully!");
      form.reset();
      router.push("/auth/login");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Reset password failed");
    },
  });

  function onSubmit(data: ResetPasswordProps) {
    resetPasswordMutation.mutate(data);
  }

  return (
    <div className={styles.container}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <FormFieldCustom<ResetPasswordProps>
            control={form.control}
            name={"email"}
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
          />
          <FormFieldOTPCustom<ResetPasswordProps>
            control={form.control}
            name={"verifyCode"}
            label={"Verify code"}
            description={
              "Please enter the one-time password sent to your email."
            }
          />
          <FormFieldCustom<ResetPasswordProps>
            control={form.control}
            name={"password"}
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
            description={
              "Password must be at least 8 characters and include uppercase, lowercase, and a number."
            }
          />
          <FormFieldCustom<ResetPasswordProps>
            control={form.control}
            name={"confirmPassword"}
            label={"Confirm password"}
            placeholder={"Confirm password"}
            type={"password"}
            description={"Confirm password must match the password."}
          />
          <Button type="submit" className={styles.form__button}>
            Change password
          </Button>
        </form>
      </Form>
    </div>
  );
}
