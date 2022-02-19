import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import SliderCarousel from "./components/SliderCarousel/SliderCarousel";

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Head>
        <title>Books Library</title>
        <meta name="description" content="Books Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <SliderCarousel />
    </div>
  );
}
