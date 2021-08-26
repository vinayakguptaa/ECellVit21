import landingStyles from "../styles/Landing.module.css";

import Image from "next/image";

/*Icons*/
import facebook from "../public/icons/facebook.svg";
import instagram from "../public/icons/instagram.svg";
import linkedin from "../public/icons/linkedin.svg";
import twitter from "../public/icons/twitter.svg";

export default function Social() {
  return (
    <>
      <div className={landingStyles.socialLinksContainer}>
        <div className={landingStyles.socialLink}>
          <a href="https://www.facebook.com/ecellvit" target="_blank">
            <Image src={facebook} alt="facebook" />
          </a>
        </div>
        <div className={landingStyles.socialLink}>
          <a href="https://www.instagram.com/ecell_vit" target="_blank">
            <Image src={instagram} alt="instagram" />
          </a>
        </div>
        <div className={landingStyles.socialLink}>
          <a
            href="https://www.linkedin.com/company/ecellvitvellore"
            target="_blank"
          >
            <Image src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className={landingStyles.socialLink}>
          <a href="https://twitter.com/ecell_vit" target="_blank">
            <Image src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </>
  );
}
