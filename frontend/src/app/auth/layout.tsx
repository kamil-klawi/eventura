import { ReactNode } from "react";
import AppBreadcrumb from "@/components/base/breadcrumb";
import styles from "./auth.module.scss";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={styles.container}>
      <div className={styles.container__inner}>
        <div className={styles.breadcrumb}>
          <AppBreadcrumb />
        </div>
        {children}
      </div>
    </main>
  );
}
