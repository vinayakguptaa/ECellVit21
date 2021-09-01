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
              className={footerstyles.socialLinkIcon}
            >
              <Image src={facebook} alt="facebook" loading="lazy" />
            </a>
          </div>
          <div className={footerstyles.socialLink}>
            <a
              href="https://www.instagram.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
              className={footerstyles.socialLinkIcon}
            >
              <Image src={instagram} alt="instagram" loading="lazy" />
            </a>
          </div>
        </div>
        <div className={footerstyles.socialChild}>
          <div className={footerstyles.socialLink}>
            <a
              href="https://www.linkedin.com/company/ecellvitvellore"
              target="_blank"
              rel="noreferrer"
              className={footerstyles.socialLinkIcon}
            >
              <Image src={linkedin} alt="linkedin" loading="lazy" />
            </a>
          </div>
          <div className={footerstyles.socialLink}>
            <a
              href="https://twitter.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
              className={footerstyles.socialLinkIcon}
            >
              <Image src={twitter} alt="twitter" loading="lazy" />
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
          <Image src={Logo} alt="logo" loading="lazy" />
        </div>
        <div className={footerstyles.socialContainer}>
          <div className={footerstyles.contactContainer}>
            <div className={footerstyles.contact}>
              <div className={footerstyles.contactImage}>
                <Image src={mail} alt="twitter" loading="lazy" />
              </div>
              <a href="mailto:helloecellvit@gmail.com">
                helloecellvit@gmail.com
              </a>
            </div>
            <div className={footerstyles.contact}>
              <div className={footerstyles.contactImage}>
                <Image src={phone} alt="twitter" loading="lazy" />
              </div>
              <a href="tel:+918293622180">+918293622180</a>
            </div>
          </div>
          <div className={footerstyles.social}>
            <FooterSocial />
          </div>
        </div>
      </span>
    </div>
  );
}
