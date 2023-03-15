import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>Hi my name is Long</h1>
      </header>
      <main className={styles.main}>
        <p>This website is under construction.</p>
        <br />
        <p>Meanwhile you can check this out.</p>
        <ul>
          <li>
            <Link href={"https://github.com/Long-HaHoang"}>My Github</Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/long-ha-hoang-213018260/"}>
              My LinkedIn
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
