import landingStyles from "../styles/Landing.module.css";

import Image from "next/image";
import ecellLogo from "../public/logos/ecell-vit-logo.png";

function NavItems(props) {
  if (props.active) {
    return (
      <>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#about">About Us</a>
          </div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#events">Events</a>
          </div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#team">Our Team</a>
          </div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#gallery">Gallery</a>
          </div>
        </div>
      </>
    );
  }
  return "";
}

export default function Nav(props) {
  return (
    <>
      <div className={landingStyles.navContainer}>
        <div className={landingStyles.ecellLogoContainer}>
          <Image src={ecellLogo} alt="E-Cell VIT" />
        </div>
      </div>

      <div
        className={landingStyles.navContainer}
        style={{ flexDirection: "row-reverse" }}
      >
        <div className={landingStyles.navbarContainer}>
          <NavItems active={props.active} />

          <div className={landingStyles.navItemContainer}>
            <div className={landingStyles.navSubBtn}>
              <div className={landingStyles.navItem}>
                {/* <a href="javascript:;" onClick="ml_webform_4496056('show')"> */}
                Subscribe
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
