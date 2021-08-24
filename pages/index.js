import homeStyles from "../styles/Home.module.css";

/*Components*/
import Landing from "../components/Landing";
import About from "../components/About";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Landing />
      <About />
    </div>
  );
}
