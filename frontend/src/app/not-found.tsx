import Link from "next/link";
import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div>
        <h1 className={styles.page__title}>Not Found</h1>
        <p className={styles.page__description}>
          Could not find requested resource
        </p>
        <hr className={styles.page__divider} />
        <div className={styles.page__buttons}>
          <Link href="/" className={styles.button}>
            Return Home
          </Link>
          <Link href="/blog" className={styles.button}>
            Go to blog
          </Link>
          <Link href="/support" className={styles.button}>
            Go to support
          </Link>
        </div>
      </div>
    </main>
  );
}
