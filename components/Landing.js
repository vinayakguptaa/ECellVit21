import { useState, useEffect } from "react";

import landingStyles from "../styles/Landing.module.css";

/*Components*/
import Nav from "./Nav";
import SLinks from "./SLinks";
import Ecell from "./Ecell";

export default function Landing(props) {
  if (!props.title) props.title = "E-Cell";
  return (
    <>
      <div className={landingStyles.container} id="home">
        <div className={landingStyles.navbar}>
          <Nav active={props.navActive} />
        </div>

        <div className={landingStyles.section}>
          <div className={landingStyles.social}>
            <SLinks />
          </div>
          <div className={landingStyles.ecell}>
            <Ecell title={props.title} />
          </div>
        </div>
      </div>
    </>
  );
}
