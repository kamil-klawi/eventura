import type { Metadata } from "next";
import RegisterForm from "@/components/base/auth/register";
import styles from "@/app/auth/page.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up | Eventura — Ticketing & Invoicing Platform",
  description: "Sign up | Eventura — Ticketing & Invoicing Platform",
};

export default function Register() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Sign up</h1>
      <p className={styles.page__text}>
        Create your new account by filling in your details below. Welcome
        aboard!
      </p>
      <div className={styles.page__divider} />
      <RegisterForm />
      <div className={styles.page__divider} />
      <p className={styles.page__text}>
        Already have an account?
        <Link href="/auth/login" className={styles.page__text_link}>
          Sign in!
        </Link>
      </p>
    </div>
  );
}
