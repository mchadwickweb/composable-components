import Header from "components/Header";

import styles from "./mainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <h3>Components</h3>
        <nav>
          <a href="/components/card">Card</a>
        </nav>
      </Header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
