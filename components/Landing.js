import landingStyles from "../styles/Landing.module.css";

/*Components*/
import Nav from "./Nav";
import Social from "./Social";
import Ecell from "./Ecell";

export default function Landing() {
  const title = "ENTREPRENEURSHIP CELL VIT";
  const links = {};
  const active = true;

  return (
    <>
      <div className={landingStyles.container}>
        <div className={landingStyles.navbar}>
          <Nav active={active} />
        </div>

        <div className={landingStyles.section}>
          <div className={landingStyles.social}>
            <Social links={links} />
          </div>
          <div className={landingStyles.ecell}>
            <Ecell title={title} />
          </div>
        </div>
      </div>
    </>
  );
}
