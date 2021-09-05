import AboutStyles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <div className={AboutStyles.aboutContainer} id="about">
        <div className={AboutStyles.sectionA}>
          <div className={AboutStyles.statsContainer}>
            <div className={AboutStyles.statNum}>5000+</div>
            <div className={AboutStyles.statName}>STUDENTS</div>
          </div>
          <div className={AboutStyles.statsContainer}>
            <div className={AboutStyles.statNum}>289+</div>
            <div className={AboutStyles.statName}>START UPS</div>
          </div>
          <div className={AboutStyles.statsContainer}>
            <div className={AboutStyles.statNum}>210+</div>
            <div className={AboutStyles.statName}>MENTORS</div>
          </div>
          <div className={AboutStyles.statsContainer}>
            <div className={AboutStyles.statNum}>100+</div>
            <div className={AboutStyles.statName}>INCUBATEES</div>
          </div>
        </div>
        <div className={AboutStyles.sectionB}>
          <a href="#home">
            <div className={AboutStyles.aboutTitle}>What is E-Cell?</div>
          </a>
          <div className={AboutStyles.aboutDesc}>
            Entrepreneurship Cell is a student body based in VIT, Vellore which
            aims at fostering entrepreneurial spirit amongst young aspirants by
            providing them with a platform and required resources for actuating
            their ideas into successful business ventures. E-Cell strives at
            attaining an ideal entrepreneurial environment in the campus and we
            believe in taking strides towards establishing an ever-growing, an
            ever-improving Start-Up environment. Our sole approach is to magnify
            the reach and to set up a diverse pool of investors, evaluators and
            mentors.
          </div>
        </div>
        <div className={AboutStyles.sectionC}>
          <a href="#home">
            <div className={AboutStyles.aboutTitle}>About VIT TBI</div>
          </a>
          <div className={AboutStyles.aboutDesc}>
            VIT TBI (Technology Business Incubator) has been established at
            Vellore Institute of Technology with the Sponsorship of the
            Department of Science and Technology, Government of India to assist
            budding entrepreneurs incubate their technology venture. VIT-TBI
            leverages all the resources that are available within the campus
            such as access to laboratory, workshops, development and testing
            centres. In addition to these resources, VIT-TBI also has a network
            of eminent professionals, academicians, bankers, venture capitalists
            and businessmen, who can extend support to the budding ventures.
          </div>
        </div>
      </div>
    </>
  );
}
