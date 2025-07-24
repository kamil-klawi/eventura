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
import { VerifyCodeProps, VerifyCodeSchema } from "@/types/auth/verify-code";
import { FormFieldOTPCustom } from "@/components/custom/form-field-otp-custom";
import styles from "@/components/base/auth/auth-component.module.scss";

export default function VerifyCodeForm() {
  const router = useRouter();
  const form = useForm<VerifyCodeProps>({
    resolver: zodResolver(VerifyCodeSchema),
    defaultValues: {
      email: "",
      verifyCode: "",
    },
  });

  const verifyMutation = useMutation({
    mutationFn: (data: VerifyCodeProps) =>
      api.post("/auth/verify", data).then((res) => res.data),
    onSuccess: () => {
      toast.success("Verification successfully!");
      form.reset();
      router.push("/auth/login");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Verification failed");
    },
  });

  function onSubmit(data: VerifyCodeProps) {
    verifyMutation.mutate(data);
  }

  return (
    <div className={styles.container}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <FormFieldCustom<VerifyCodeProps>
            control={form.control}
            name={"email"}
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
          />
          <FormFieldOTPCustom<VerifyCodeProps>
            control={form.control}
            name={"verifyCode"}
            label={"Verify code"}
            description={
              "Please enter the one-time password sent to your email."
            }
          />
          <Button type="submit" className={styles.form__button}>
            Verify code
          </Button>
        </form>
      </Form>
    </div>
  );
}
