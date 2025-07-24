"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { FormFieldCustom } from "@/components/custom/form-field-custom";
import {
  ForgotPasswordProps,
  ForgotPasswordSchema,
} from "@/types/auth/forgot-password";
import styles from "@/components/base/auth/auth-component.module.scss";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const form = useForm<ForgotPasswordProps>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (data: ForgotPasswordProps) =>
      api.post("/auth/forgot-password", data).then((res) => res.data),
    onSuccess: () => {
      toast.success("Password reset email sent!");
      form.reset();
      router.push("/auth/reset-password");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to send reset email",
      );
    },
  });

  function onSubmit(data: ForgotPasswordProps) {
    forgotPasswordMutation.mutate(data);
  }

  return (
    <div className={styles.container}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <FormFieldCustom<ForgotPasswordProps>
            control={form.control}
            name={"email"}
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
            description={"Enter the email associated with your account."}
          />
          <Button type="submit" className={styles.form__button}>
            Send reset code
          </Button>
        </form>
      </Form>
    </div>
  );
}
