import Meta from "../meta";

import { Footer, Navbar } from "../../components";

import styles from "./Layout.module.css";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
