import homeStyles from "../styles/Home.module.css";

/*Components*/
import Landing from "../components/Landing";
import About from "../components/About";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Landing />
      <About />
      <Team />
    </div>
  );
}
