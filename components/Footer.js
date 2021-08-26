import footerstyles from "../styles/Footer.module.css";
import Social from "./Social";

export default function Footer() {
  return (
    <div className={footerstyles.social}>
      <Social />
    </div>
  );
}
