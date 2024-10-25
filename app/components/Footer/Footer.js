import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.vert_line}>
          <nav>
            <Link href="/">
              <span className={styles.info}>privacy policy</span>
            </Link>
            <Link href="/">
              <span className={styles.info}>term of service</span>
            </Link>
            <Link href="/">
              <span className={styles.info}>about leoshop</span>
            </Link>
          </nav>
        </div>
        <span className={styles.data_leo}>
          &copy; 2024 LeoShop. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
