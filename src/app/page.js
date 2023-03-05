import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log("Hello World!");
  return (
    <>
      <header className={styles.header}>
        <h1>This is the website header</h1>
      </header>
      <main className={styles.main}>
        <p>Website under construction.</p>
      </main>
      <footer>
        <Link href={"/Imprint"}>Imprint (Impressum)</Link>
      </footer>
    </>
  );
}
