import { useState, useEffect } from "react";

import TeamStyles from "../styles/Team.module.css";

import Image from "next/image";

/*Icons*/
import instagram from "../public/icons/instagram.svg";
import linkedin from "../public/icons/linkedin.svg";

function Board(props) {
  let offsetClass = null;
  let offset = "0rem";
  let display = "block";
  if (props.instagramNotAvailable) {
    display = "none";
  }
  if (props.offset) {
    offsetClass = "TeamStyles.offsetImage";
    offset = "0rem";
  }

  const style = {
    one: "TeamStyles.imageContainer",
    two: offsetClass,
  };

  return (
    <div
      className={style["one"] + " " + style["two"]}
      // style={{ order: props.order, transform: `translateY(${offset})` }}
    >
      <div className={TeamStyles.imageItemContainer}>
        <div className={TeamStyles.imageItem}>
          <Image
            src={`https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/boardImages2/${props.image}.jpg`}
            alt={props.name + ", " + props.designation}
            layout="fill"
            loading="eager"
          />
        </div>

        <div className={TeamStyles.imageItemOverlay}>
          <div
            className={TeamStyles.imageItemOverlayItem}
            style={{ display: display }}
          >
            <a href={props.instagram} target="_blank" rel="noreferrer">
              <Image src={instagram} alt="instagram" loading="lazy" />
            </a>
          </div>
          <div className={TeamStyles.imageItemOverlayItem}>
            <a href={props.linkedin} target="_blank" rel="noreferrer">
              <Image src={linkedin} alt="linkedin" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
      <div className={TeamStyles.infoContainer}>
        <div className={TeamStyles.boardName}>{props.name}</div>
        <div className={TeamStyles.boardDes}>{props.designation}</div>
      </div>
    </div>
  );
}

export default function Team() {
  const [order, setOrder] = useState({ one: 1, two: 2, three: 3, four: 4 });

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        setOrder({ one: 2, two: 1, three: 3 });
      } else {
        setOrder({ one: 1, two: 2, three: 3 });
      }
    });
    return () => {
      addEventListener("resize", () => {
        if (window.innerWidth < 900) {
          setOrder({ one: 2, two: 1, three: 3, four: 4 });
        } else {
          setOrder({ one: 1, two: 2, three: 3, four: 4 });
        }
      });
    };
  }, []);

  return (
    <div className={TeamStyles.teamContainer} id="team">
      <a href="#home">
        <div className={TeamStyles.title}>Our Team</div>
      </a>

      <div className={TeamStyles.imageRowsContainer}>
        <Board
          image={"Namrata"}
          name="Namrata Singhal"
          designation="Managing Director"
          offset={false}
          order={order.two}
          instagram=""
          instagramNotAvailable={true}
          linkedin="https://www.linkedin.com/in/namrata-singhal-ba8735199/"
        />

        <Board
          image={"Nipun"}
          name="Nipun Mahajan"
          designation="Deputy Managing Director"
          offset={true}
          order={order.one}
          instagram="https://www.instagram.com/nipun_3000/"
          linkedin="https://www.linkedin.com/in/nipun-mahajan-6b6718165/"
        />

        <Board
          image={"Pearl"}
          name="Pearl Motwani"
          designation="Deputy Managing Director"
          offset={true}
          order={order.three}
          instagram="https://www.instagram.com/pearl.motwani/"
          linkedin="https://www.linkedin.com/in/pearl-motwani-862089190/"
        />

        <Board
          image={"Rishabh"}
          name="Rishabh Mehta"
          designation="Director Of Operations"
          offset={true}
          order={order.one}
          instagram="https://www.instagram.com/rishabh67/"
          linkedin="https://www.linkedin.com/in/rishabh-mehta1605/"
        />

        <Board
          image={"Aaditya"}
          name="Aaditya Pareek"
          designation="Director Of Projects"
          offset={false}
          order={order.two}
          instagram="https://www.instagram.com/aadityapareek/"
          linkedin="https://www.linkedin.com/in/aaditya-pareek-29646318a/"
        />

        <Board
          image={"Mayank"}
          name="Mayank Jain"
          designation="Director Of Content Strategy"
          offset={true}
          order={order.three}
          instagram="https://www.instagram.com/mayank.2506/"
          linkedin="https://www.linkedin.com/in/mayank-1010/"
        />

        <Board
          image={"Param"}
          name="Param Sharma"
          designation="Director Of Design And Media"
          offset={true}
          order={order.one}
          instagram="https://www.instagram.com/paramssharma/"
          linkedin="https://www.linkedin.com/in/paramssharma/"
        />

        <Board
          image={"Yashraj"}
          name="Yashraj Singh"
          designation="Director Of Outreach"
          offset={false}
          order={order.two}
          instagram="https://www.instagram.com/yashraj_singh_29/"
          linkedin="https://www.linkedin.com/in/yashraj-singh7781/"
        />

        <Board
          image={"Sanjiv"}
          name="Sanjiv Mohanty"
          designation="Director Of Research And Development"
          offset={true}
          order={order.three}
          instagram="https://www.instagram.com/_sanjivmohanty/"
          linkedin="https://www.linkedin.com/in/sanjiv-mohanty-480397199/"
        />

        <Board
          image={"Anaswara"}
          name="Anaswara Santhosh"
          designation="Director Of Collaborations"
          offset={true}
          order={order.one}
          instagram=""
          instagramNotAvailable={true}
          linkedin="https://www.linkedin.com/in/anaswara-santhosh-174964199/"
        />

        <Board
          image={"Sahib"}
          name="Sahib Dua"
          designation="Director Of Finance And Sponsorship"
          offset={false}
          order={order.two}
          instagram="https://www.instagram.com/sahib.dua/"
          linkedin="https://www.linkedin.com/in/sahib-dua-18b7121a1/"
        />

        <Board
          image={"Akriti"}
          name="Akriti Agarwal"
          designation="Director Of Public Relations"
          offset={true}
          order={order.three}
          instagram="https://www.instagram.com/akritiagarwal09/"
          linkedin="https://www.linkedin.com/in/akriti-agarwal-5295b61a0/"
        />
        <Board
          image={"Vinayak"}
          name="Vinayak Gupta"
          designation="Director Of Technology"
          offset={false}
          order={order.four}
          instagram="https://www.instagram.com/vinayakgupta.in/"
          linkedin="https://www.linkedin.com/in/vinayakguptaa/"
        />
      </div>
    </div>
  );
}
