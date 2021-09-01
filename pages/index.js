import { useState, useEffect } from "react";

import Head from "next/head";

import homeStyles from "../styles/Home.module.css";

/*Components*/
import LoadingScreen from "../components/LoadingScreen";
import Landing from "../components/Landing";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 8000);
  }, []);

  return (
    <>
      <Head>
        <title>Entrepreneurship Cell VIT</title>
      </Head>

      {loading ? (
        <LoadingScreen loading={loading} />
      ) : (
        <div className={homeStyles.container}>
          <Landing />
          <About />
          <Events />
          <Team />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}
