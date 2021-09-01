import loadingScreenStyles from "../styles/LoadingScreen.module.css";

export default function LoadingScreen(props) {
  let opacity = 1;
  if (!props.loading) {
    opacity = 0;
  }
  return (
    <div
      className={loadingScreenStyles.mainContainer}
      style={{ opacity: opacity }}
    >
      <div className={loadingScreenStyles.circ}></div>
      <div className={loadingScreenStyles.circ}></div>
      <div className={loadingScreenStyles.circ}></div>
    </div>
  );
}
