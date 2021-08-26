import { useState, useEffect } from "react";

import landingStyles from "../styles/Landing.module.css";

/*Components*/
import Nav from "./Nav";
import Social from "./Social";
import Ecell from "./Ecell";

export default function Landing() {
  const [title, setTitle] = useState("ENTREPRENEURSHIP CELL VIT");
  const [navActive, setNavActive] = useState(true);

  useEffect(() => {
    function resize() {
      if (window.innerWidth < 900) {
        setTitle("E-CELL");
        setNavActive(false);
      } else {
        setTitle("ENTREPRENEURSHIP CELL VIT");
        setNavActive(true);
      }
    }

    addEventListener("resize", resize());
    return () => {
      addEventListener("resize", resize());
    };
  }, []);

  const links = {};

  return (
    <>
      <div className={landingStyles.container} id="home">
        <div className={landingStyles.navbar}>
          <Nav active={navActive} />
        </div>

        <div className={landingStyles.section}>
          <div className={landingStyles.social}>
            <Social links={links} />
          </div>
          <div className={landingStyles.ecell}>
            <Ecell title={title} />
          </div>
        </div>
      </div>
    </>
  );
}
