import footerstyles from "../styles/Footer.module.css";

import Image from "next/image";

/*Icons*/
import facebook from "../public/icons/facebook.svg";
import instagram from "../public/icons/instagram.svg";
import linkedin from "../public/icons/linkedin.svg";
import twitter from "../public/icons/twitter.svg";
import Logo from "../public/logos/ecell-vit-logo.png";

function FooterSocial() {
  return (
    <>
      <div className={footerstyles.socialLinksContainer}>
        <div className={footerstyles.socialLink}>
          <Image src={facebook} alt="facebook" />
        </div>
        <div className={footerstyles.socialLink}>
          <Image src={instagram} alt="instagram" />
        </div>
        <div className={footerstyles.socialLink}>
          <Image src={linkedin} alt="linkedin" />
        </div>
        <div className={footerstyles.socialLink}>
          <Image src={twitter} alt="twitter" />
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <div className={footerstyles.footer}>
      <span className={footerstyles.smallContainer}>
        <div className={footerstyles.ecell_logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <h2>IDEATE. INNOVATE. ACTUATE</h2>
        <div className={footerstyles.contact}>
          <Image src={twitter} alt="twitter" />
          <a href="mailto:helloecellvit@gmail.com">helloecellvit@gmail.com</a>
        </div>
        <div className={footerstyles.contact}>
          <Image src={twitter} alt="twitter" />
          <a href="tel:+918293622180">+918293622180</a>
        </div>
        <div className={footerstyles.social}>
          <FooterSocial />
        </div>
      </span>
    </div>
  );
}
