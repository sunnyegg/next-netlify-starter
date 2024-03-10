import Head from "next/head";
import Header from "@components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sunnyegg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi!" />
        <p className="description">Nothing to see here, currently.</p>
      </main>
    </div>
  );
}
