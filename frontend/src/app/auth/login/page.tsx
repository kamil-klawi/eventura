import type { Metadata } from "next";
import LoginForm from "@/components/base/auth/login";
import styles from "@/app/auth/page.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Eventura — Ticketing & Invoicing Platform",
  description: "Login | Eventura — Ticketing & Invoicing Platform",
};

export default function Login() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Sign in</h1>
      <p className={styles.page__text}>
        Welcome back! Please enter your email and password to access your
        account.
      </p>
      <div className={styles.page__divider} />
      <LoginForm />
      <div className={styles.page__divider} />
      <p className={styles.page__text}>
        Don't have an account?
        <Link href="/auth/register" className={styles.page__text_link}>
          Sign up!
        </Link>
      </p>
    </div>
  );
}
