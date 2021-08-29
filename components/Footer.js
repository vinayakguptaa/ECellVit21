import footerstyles from "../styles/Footer.module.css";

import Image from "next/image";

/*Icons*/
import facebook from "../public/icons/facebook.svg";
import instagram from "../public/icons/instagram.svg";
import linkedin from "../public/icons/linkedin.svg";
import twitter from "../public/icons/twitter.svg";
import Logo from "../public/logos/ecell-vit-logo.png";
import mail from "../public/icons/mail.svg";
import phone from "../public/icons/phone.svg";

function FooterSocial() {
  return (
    <>
      <div className={footerstyles.socialLinksContainer}>
        <div className={footerstyles.socialChild}>
          <div className={footerstyles.socialLink}>
            <a
              href="https://www.facebook.com/ecellvit"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={facebook} alt="facebook" />
            </a>
          </div>
          <div className={footerstyles.socialLink}>
            <a
              href="https://www.instagram.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className={footerstyles.socialChild}>
          <div className={footerstyles.socialLink}>
            <a
              href="https://www.linkedin.com/company/ecellvitvellore"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div className={footerstyles.socialLink}>
            <a
              href="https://twitter.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </a>
          </div>
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
        <div className={footerstyles.contactContainer}>
          <div className={footerstyles.contact}>
            <Image src={mail} alt="twitter" />
            <a href="mailto:helloecellvit@gmail.com">helloecellvit@gmail.com</a>
          </div>
          <div className={footerstyles.contact}>
            <Image src={phone} alt="twitter" />
            <a href="tel:+918293622180">+918293622180</a>
          </div>
        </div>
        <div className={footerstyles.social}>
          <FooterSocial />
        </div>
      </span>
    </div>
  );
}
