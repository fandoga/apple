import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
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
      </main>
    </div>
  );
}
