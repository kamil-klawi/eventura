"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldCustom } from "@/components/custom/form-field-custom";
import { LoginFormProps, LoginFormSchema } from "@/types/auth/login";
import styles from "@/components/base/auth/auth-component.module.scss";

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginFormProps>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginFormProps) =>
      api.post("/auth/login", data).then((res) => res.data),
    onSuccess: () => {
      toast.success("Login successfully!");
      form.reset();
      router.push("/");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Login failed");
    },
  });

  function onSubmit(data: LoginFormProps) {
    loginMutation.mutate(data);
  }

  return (
    <div className={styles.container}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <FormFieldCustom<LoginFormProps>
            control={form.control}
            name={"email"}
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
          />
          <FormFieldCustom<LoginFormProps>
            control={form.control}
            name={"password"}
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
            description={
              "Password must be at least 8 characters and include uppercase, lowercase, and a number."
            }
          />
          <div className={styles.form__anchor}>
            <Link
              href={"/auth/forgot-password"}
              className={styles.form__anchor_link}
            >
              Forgot password
            </Link>
          </div>
          <Button type="submit" className={styles.form__button}>
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}
