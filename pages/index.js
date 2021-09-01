import { useState, useEffect } from "react";

import Head from "next/head";

import homeStyles from "../styles/Home.module.css";

/*Components*/
// import LoadingScreen from "../components/LoadingScreen";
import Landing from "../components/Landing";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  // const [loading, setloading] = useState(true);
  const [title, setTitle] = useState("ENTREPRENEURSHIP CELL VIT");
  const [navActive, setNavActive] = useState(true);

  useEffect(() => {
    // setloading(true);
    // setTimeout(() => {
    //   setloading(false);
    // }, 8000);

    addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setTitle("E-CELL");
        setNavActive(false);
      } else {
        setTitle("ENTREPRENEURSHIP CELL VIT");
        setNavActive(true);
      }
    });
    addEventListener("load", () => {
      if (window.innerWidth < 1000) {
        setTitle("E-CELL");
        setNavActive(false);
      } else {
        setTitle("ENTREPRENEURSHIP CELL VIT");
        setNavActive(true);
      }
    });

    return () => {
      addEventListener("resize", () => {
        if (window.innerWidth < 1000) {
          setTitle("E-CELL");
          setNavActive(false);
        } else {
          setTitle("ENTREPRENEURSHIP CELL VIT");
          setNavActive(true);
        }
      });
      addEventListener("load", () => {
        if (window.innerWidth < 1000) {
          setTitle("E-CELL");
          setNavActive(false);
        } else {
          setTitle("ENTREPRENEURSHIP CELL VIT");
          setNavActive(true);
        }
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Entrepreneurship Cell VIT</title>
      </Head>

      {/* {loading ? (
        <LoadingScreen loading={loading} />
      ) : ( */}
      <div className={homeStyles.container}>
        <Landing title={title} navActive={navActive} />
        <About />
        <Events />
        <Team />
        <Gallery />
        <Footer />
      </div>
      {/* )} */}
    </>
  );
}
