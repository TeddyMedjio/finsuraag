import Nav from "@/components/Navbar/Nav";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Swiper/Slider";
import Blocs from "@/components/Blocs/Blocs";
import Logos from "@/components/Logos/Logos";
import Services from "@/components/Finsura/Services";
import Call from "@/components/Call/Call";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Home - FINSURA AG</title>
        <meta
          name="description"
          content="Die Finsura AG ist Ihr kompetenter Partner in der Versicherungs- und Finanzwelt."
        />
        <meta
          name="keywords"
          content="FINSURA AG, Versicherungs- und Finanzwelt."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Navbar />
      <Slider />
      <Blocs />
      <Logos />
      <Services />
      <Call />
      <Footer />
    </main>
  );
}
