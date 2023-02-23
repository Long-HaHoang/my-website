import { Roboto } from "next/font/google";
import styles from "./page.module.css";

const roboto = Roboto({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello website under construction</h1>
    </main>
  );
}
