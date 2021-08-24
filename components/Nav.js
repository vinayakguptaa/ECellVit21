import landingStyles from "../styles/Landing.module.css";

import Image from "next/image";
import ecellLogo from "../public/logos/ecell-vit-logo.png";

function NavItems(props) {
  if (props.active) {
    return (
      <>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>Home</div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>About Us</div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>Our Team</div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>Gallery</div>
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
              <div className={landingStyles.navItem}>Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
