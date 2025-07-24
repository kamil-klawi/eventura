import type { Metadata } from "next";
import ForgotPasswordForm from "@/components/base/auth/forgot-password";
import styles from "@/app/auth/page.module.scss";

export const metadata: Metadata = {
  title: "Forgot password | Eventura — Ticketing & Invoicing Platform",
  description: "Forgot password | Eventura — Ticketing & Invoicing Platform",
};

export default function ForgotPassword() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Forgot Password</h1>
      <p className={styles.page__text}>
        Don’t worry! Enter your registered email, and we’ll send you a link to
        reset your password.
      </p>
      <div className={styles.page__divider} />
      <ForgotPasswordForm />
    </div>
  );
}
