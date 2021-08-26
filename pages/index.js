import homeStyles from "../styles/Home.module.css";

/*Components*/
import Landing from "../components/Landing";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Landing />
      <About />
      <Events />
      <Team />
      <Gallery />
      <Footer />
    </div>
  );
}
