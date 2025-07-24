import type { Metadata } from "next";
import ResetPasswordForm from "@/components/base/auth/reset-password";
import styles from "@/app/auth/page.module.scss";

export const metadata: Metadata = {
  title: "Reset password | Eventura — Ticketing & Invoicing Platform",
  description: "Reset password | Eventura — Ticketing & Invoicing Platform",
};

export default function ResetPassword() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Reset password</h1>
      <p className={styles.page__text}>
        Forgot your password? Enter a new one below to regain access to your
        account.
      </p>
      <div className={styles.page__divider} />
      <ResetPasswordForm />
    </div>
  );
}
