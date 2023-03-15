import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>Hi my name is Long</h1>
      </header>
      <main className={styles.main}>
        <p>This website is under construction.</p>
      </main>
      <footer>
        <Link href={"/Imprint"}>Imprint (Impressum)</Link>
        <Link href={"/DataPrivacy"}>Data Privacy (Datenschutz)</Link>
      </footer>
    </>
  );
}
