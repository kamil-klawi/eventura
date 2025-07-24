import type { Metadata } from "next";
import VerifyCodeForm from "@/components/base/auth/verify-code";
import styles from "@/app/auth/page.module.scss";

export const metadata: Metadata = {
  title: "Verify code | Eventura — Ticketing & Invoicing Platform",
  description: "Verify code | Eventura — Ticketing & Invoicing Platform",
};

export default function Verify() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Verify code</h1>
      <p className={styles.page__text}>
        Please enter the verification code sent to your email or phone to verify
        your identity and continue.
      </p>
      <div className={styles.page__divider} />
      <VerifyCodeForm />
    </div>
  );
}
