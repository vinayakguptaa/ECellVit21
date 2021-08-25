import { useState, useEffect } from "react";

import TeamStyles from "../styles/Team.module.css";

import Image from "next/image";

/*Board Images*/
import Namrata from "../public/images/Namrata.jpg";
import Nipun from "../public/images/Nipun.jpg";
import Pearl from "../public/images/Pearl.jpg";
import Rishabh from "../public/images/Rishabh.jpg";
import Aaditya from "../public/images/Aaditya.jpg";
import Mayank from "../public/images/Mayank.jpg";
import Param from "../public/images/Param.jpg";
import Yashraj from "../public/images/Yashraj.jpg";
import Sanjiv from "../public/images/Sanjiv.jpg";
import Anaswara from "../public/images/Anaswara.jpg";
import Sahib from "../public/images/Sahib.jpg";
import Akriti from "../public/images/Akriti.jpg";
import Vinayak from "../public/images/Vinayak.jpg";

function Board(props) {
  let offsetClass = null;
  if (props.offset) {
    offsetClass = TeamStyles.offsetImage;
  }

  return (
    <div
      className={TeamStyles.imageContainer}
      className={offsetClass}
      style={{ order: props.order }}
    >
      <div className={TeamStyles.imageItemContainer}>
        <div className={TeamStyles.imageItemOverlay}></div>
        <Image
          src={props.image}
          alt={props.name + ", " + props.designation}
          className={TeamStyles.imageItem}
        />
      </div>
      <div className={TeamStyles.infoContainer}>
        <div className={TeamStyles.boardName}>{props.name}</div>
        <div className={TeamStyles.boardDes}>{props.designation}</div>
      </div>
    </div>
  );
}

export default function Team() {
  const [order, setOrder] = useState({ one: 1, two: 2, three: 3 });

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
          setOrder({ one: 2, two: 1, three: 3 });
        } else {
          setOrder({ one: 1, two: 2, three: 3 });
        }
      });
    };
  }, []);

  return (
    <>
      <div className={TeamStyles.title}>Our Team</div>

      <div className={TeamStyles.imageRowsContainer}>
        <div className={TeamStyles.imageRow}>
          <Board
            image={Nipun}
            name="Nipun Mahajan"
            designation="Deputy Managing Director"
            offset={true}
            order={order.one}
          />

          <Board
            image={Namrata}
            name="Namrat Singhal"
            designation="Managing Director"
            offset={false}
            order={order.two}
          />

          <Board
            image={Pearl}
            name="Pearl Motwani"
            designation="Deputy Managing Director"
            offset={true}
            order={order.three}
          />
        </div>
        <div className={TeamStyles.imageRow}>
          <Board
            image={Rishabh}
            name="Rishabh Mehta"
            designation="Director Of Operations"
            offset={true}
            order={order.one}
          />

          <Board
            image={Aaditya}
            name="Aaditya Pareek"
            designation="Director Of Projects"
            offset={false}
            order={order.two}
          />

          <Board
            image={Mayank}
            name="Mayank Jain"
            designation="Director Of Content Strategy"
            offset={true}
            order={order.three}
          />
        </div>
        <div className={TeamStyles.imageRow}>
          <Board
            image={Param}
            name="Param Sharma"
            designation="Director Of Design And Media"
            offset={true}
            order={order.one}
          />

          <Board
            image={Yashraj}
            name="Yashraj Singh"
            designation="Director Of Outreach"
            offset={false}
            order={order.two}
          />

          <Board
            image={Sanjiv}
            name="Sanjiv Mohanty"
            designation="Director Of Research And Development"
            offset={true}
            order={order.three}
          />
        </div>
        <div className={TeamStyles.imageRow}>
          <Board
            image={Anaswara}
            name="Anaswara Santhosh"
            designation="Director Of Collaborations"
            offset={true}
            order={order.one}
          />

          <Board
            image={Sahib}
            name="Sahib Dua"
            designation="Director Of Finance And Sponsorship"
            offset={false}
            order={order.two}
          />

          <Board
            image={Akriti}
            name="Akriti Agarwal"
            designation="Director Of Public Relations"
            offset={true}
            order={order.three}
          />
        </div>
        <div className={TeamStyles.imageRow}>
          <Board
            image={Vinayak}
            name="Vinayak Gupta"
            designation="Director Of Technology"
            offset={false}
            order={order.two}
          />
        </div>
      </div>
    </>
  );
}
