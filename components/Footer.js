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

import loader from "./imageLoader";

function FooterSLink() {
  return (
    <>
      <div className={footerstyles.slinkLinksContainer}>
        <div className={footerstyles.slinkChild}>
          <div className={footerstyles.slinkLink}>
            <a
              href="https://www.facebook.com/ecellvit"
              target="_blank"
              rel="noreferrer"
              className={footerstyles.slinkLinkIcon}
            >
              <Image
                loader={loader}
                src={facebook}
                alt="facebook"
                loading="lazy"
              />
            </a>
          </div>
          <div className={footerstyles.slinkLink}>
            <a
              href="https://www.instagram.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
              className={footerstyles.slinkLinkIcon}
            >
              <Image
                loader={loader}
                src={instagram}
                alt="instagram"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className={footerstyles.slinkChild}>
          <div className={footerstyles.slinkLink}>
            <a
              href="https://www.linkedin.com/company/ecellvitvellore"
              target="_blank"
              rel="noreferrer"
              className={footerstyles.slinkLinkIcon}
            >
              <Image
                loader={loader}
                src={linkedin}
                alt="linkedin"
                loading="lazy"
              />
            </a>
          </div>
          <div className={footerstyles.slinkLink}>
            <a
              href="https://twitter.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
              className={footerstyles.slinkLinkIcon}
            >
              <Image
                loader={loader}
                src={twitter}
                alt="twitter"
                loading="lazy"
              />
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
          <Image loader={loader} src={Logo} alt="logo" loading="lazy" />
        </div>
        <div className={footerstyles.slinkContainer}>
          <div className={footerstyles.contactContainer}>
            <div className={footerstyles.contact}>
              <div className={footerstyles.contactImage}>
                <Image
                  loader={loader}
                  src={mail}
                  alt="twitter"
                  loading="lazy"
                />
              </div>
              <a href="mailto:helloecellvit@gmail.com">
                helloecellvit@gmail.com
              </a>
            </div>
            <div className={footerstyles.contact}>
              <div className={footerstyles.contactImage}>
                <Image
                  loader={loader}
                  src={phone}
                  alt="twitter"
                  loading="lazy"
                />
              </div>
              <a href="tel:+918293622180">+918293622180</a>
            </div>
          </div>
          <div className={footerstyles.slink}>
            <FooterSLink />
          </div>
        </div>
      </span>
    </div>
  );
}
