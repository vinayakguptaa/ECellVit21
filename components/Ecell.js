import landingStyles from "../styles/Landing.module.css";

export default function Ecell(props) {
  return (
    <>
      <div className={landingStyles.titleContainer}>
        <div>{props.title}</div>
        <p>IDEATE. INNOVATE. ACTUATE.</p>
      </div>
    </>
  );
}
