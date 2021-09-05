import landingStyles from "../styles/Landing.module.css";

import Image from "next/image";

/*Icons*/
import facebook from "../public/icons/facebook.svg";
import instagram from "../public/icons/instagram.svg";
import linkedin from "../public/icons/linkedin.svg";
import twitter from "../public/icons/twitter.svg";

export default function SLink() {
  return (
    <>
      <div className={landingStyles.slinkLinksContainer}>
        <div className={landingStyles.slinkChild}>
          <div className={landingStyles.slinkLink}>
            <a
              href="https://www.facebook.com/ecellvit"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={facebook} alt="facebook" loading="eager" />
            </a>
          </div>
        </div>
        <div className={landingStyles.slinkChild}>
          <div className={landingStyles.slinkLink}>
            <a
              href="https://www.instagram.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={instagram} alt="instagram" loading="eager" />
            </a>
          </div>
        </div>
        <div className={landingStyles.slinkChild}>
          <div className={landingStyles.slinkLink}>
            <a
              href="https://www.linkedin.com/company/ecellvitvellore"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="linkedin" loading="eager" />
            </a>
          </div>
        </div>
        <div className={landingStyles.slinkChild}>
          <div className={landingStyles.slinkLink}>
            <a
              href="https://twitter.com/ecell_vit"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={twitter} alt="twitter" loading="eager" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
