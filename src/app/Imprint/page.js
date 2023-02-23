import Link from "next/link";

export default function ImprintPage() {
  return (
    <>
      <header>
        <h1>Impressum</h1>
      </header>
      <main>
        <p>
          As the author of this website is a german citizen, thus this site
          itself is subject to german law, the following imprint is presented in
          german.
        </p>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Long Ha Hoang
          <br />
          Kiebitzweg 4<br />
          85356 Freising
        </p>
        <h2>Kontakt</h2>
      </main>
      <footer>
        <p>
          © 2023 Long Ha Hoang, Built with{" "}
          <Link href={"https://nextjs.org/blog/next-13"}>Next.js 13</Link>
        </p>
        <p>
          All the website code can be found on this{" "}
          <Link href={"https://github.com/Long-HaHoang/my-website"}>
            GitHub Repo
          </Link>
        </p>
        <Link href={"/"}>Home</Link>
      </footer>
    </>
  );
}
