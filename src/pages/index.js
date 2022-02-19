import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar/NavigationBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Books Library</title>
        <meta name="description" content="Books Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
    </div>
  );
}
