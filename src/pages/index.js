import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";

import * as Sentry from "@sentry/react";

function Home() {
  const Model = dynamic(
    () => import("@/components/Model").then((mod) => mod.default),
    { ssr: false }
  );

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
        <Model />
      </main>
    </div>
  );
}

export default Sentry.withProfiler(Home);
