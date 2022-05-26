import Head from "next/head";
import React from "react";

// Components
import Footer from "../components/Footer";
import Calendaro from "../components/Calendar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <meta name="description" content="Calendar app exercise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Calendar app</h1>
        <Calendaro />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
