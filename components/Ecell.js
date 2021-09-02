import landingStyles from "../styles/Landing.module.css";

export default function Ecell(props) {
  return (
    <>
      <div className={landingStyles.titleContainer}>
        <div className={landingStyles.titleElement}>{props.title}</div>
        <p className={landingStyles.titleElement}>IDEATE. INNOVATE. ACTUATE.</p>
      </div>
    </>
  );
}
