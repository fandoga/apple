import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Head from "next/head";

import * as Sentry from "@sentry/react";
import ClientWrapper from "@/components/ClientWrapper";

function Home() {
  return (
    <div>
      <Head>
        <title>Apple. Inc</title>
        <meta name="description" content="Apple" />
        <link rel="icon" href="/assets/images/apple.svg" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <ClientWrapper />
      </main>
    </div>
  );
}

export default Sentry.withProfiler(Home);
