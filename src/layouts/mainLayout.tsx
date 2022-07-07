import Header from "components/Header";
import Link from "next/link";

import styles from "./mainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <h3>Components</h3>
        <nav>
          <Link href="/components/card">
            <a>Card</a>
          </Link>
        </nav>
      </Header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
