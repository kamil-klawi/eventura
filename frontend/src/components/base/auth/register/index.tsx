"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldCustom } from "@/components/custom/form-field-custom";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { RegisterFormProps, RegisterFormSchema } from "@/types/auth/register";
import styles from "@/components/base/auth/auth-component.module.scss";

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<RegisterFormProps>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormProps) =>
      api.post("/auth/register", data).then((res) => res.data),
    onSuccess: () => {
      toast.success("Registered successfully!");
      form.reset();
      router.push("/auth/verify");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Registration failed");
    },
  });

  function onSubmit(data: RegisterFormProps) {
    registerMutation.mutate(data);
  }

  return (
    <div className={styles.container}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <FormFieldCustom<RegisterFormProps>
            control={form.control}
            name={"firstName"}
            label={"First name"}
            placeholder={"First name"}
            type={"text"}
          />
          <FormFieldCustom<RegisterFormProps>
            control={form.control}
            name={"lastName"}
            label={"Last name"}
            placeholder={"Last name"}
            type={"text"}
          />
          <FormFieldCustom<RegisterFormProps>
            control={form.control}
            name={"email"}
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
          />
          <FormFieldCustom<RegisterFormProps>
            control={form.control}
            name={"password"}
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
            description={
              "Password must be at least 8 characters and include uppercase, lowercase, and a number."
            }
          />
          <FormFieldCustom<RegisterFormProps>
            control={form.control}
            name={"confirmPassword"}
            label={"Confirm password"}
            placeholder={"Confirm password"}
            type={"password"}
            description={"Confirm password must match the password."}
          />
          <Button type="submit" className={styles.form__button}>
            Sign up
          </Button>
        </form>
      </Form>
    </div>
  );
}
