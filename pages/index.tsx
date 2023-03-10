import Banner from "@/components/Banner";
import Content from "@/components/Content";
import Depoimento from "@/components/Depoimento";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import OurPartners from "@/components/OurPartners";
import Safety from "@/components/Safety";
import YourChoose from "@/components/YourChoose/YourChoose";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="w-screen h-screen">
          <section>
            <Header />
          </section>
          <section className="w-full">
            <Banner />
          </section>
          <section>
            <YourChoose />
          </section>
          <section>
            <Content />
          </section>
          <section>
            <OurPartners />
          </section>
          <section>
            <Depoimento />
          </section>
          <section>
            <Safety />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
