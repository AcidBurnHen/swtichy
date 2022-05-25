import Head from "next/head";

// Components
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <meta name="description" content="Calendar app exercise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Calendar app</h1>

      <Footer />
    </div>
  );
}
