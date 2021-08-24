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
          <Image src={facebook} alt="facebook" />
        </div>
        <div className={landingStyles.socialLink}>
          <Image src={instagram} alt="instagram" />
        </div>
        <div className={landingStyles.socialLink}>
          <Image src={linkedin} alt="linkedin" />
        </div>
        <div className={landingStyles.socialLink}>
          <Image src={twitter} alt="twitter" />
        </div>
      </div>
    </>
  );
}
