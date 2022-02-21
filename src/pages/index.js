import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import Banner from "./components/Banner/Banner";
import Cars from "./components/Cars/Cars";
import AnimeAPI from "./components/AnimeAPI/AnimeAPI";
import { Container } from "reactstrap";

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
        <title>Books Library v1</title>
        <meta name="description" content="Books Library" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <Banner />
      <Container className="pt-4">
        <Cars />
        <AnimeAPI />
      </Container>
    </div>
  );
}
