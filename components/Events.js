import Image from "next/image";

import eventStyles from "../styles/Events.module.css";

import Esummit from "../public/logos/esummit.png";
import Hackertech from "../public/logos/hackertech.png";
import Startupvit from "../public/logos/startupvit.png";
import Futurepreneurs from "../public/logos/future.png";
import b2b from "../public/logos/b2b.png";
import bnb from "../public/logos/bnb.png";
import Udaan from "../public/logos/udaan.png";
import Scribble from "../public/logos/scribble.png";
import Alumni from "../public/logos/alumni_talk.png";

function Event(props) {
  return (
    <div className={eventStyles.cards_item}>
      <div className={eventStyles.event_card}>
        <div className={eventStyles.event_card_image}>
          <Image src={props.img} alt="event" layout="intrinsic" />
        </div>
        <h2 className={eventStyles.card_title}>{props.name}</h2>
        <div className={eventStyles.card_content}>
          <p className={eventStyles.card_text}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <>
      <div className={eventStyles.title} id="events">
        <a href="#home">Events</a>
      </div>
      <div className={eventStyles.main}>
        <Event
          img={Esummit}
          fit="fit"
          name="E-summit"
          desc="Masquerading as a single event, it is a fusion of visionary activities and insightful sessions that open the realm of networking and broaden the horizon of business in your mind. Nurture your entrepreneurial heart by plunging into our flagship event."
        />
        <Event
          img={Hackertech}
          fit="fit"
          name="HackerTech"
          desc="Hackertech is a 36-hour national tech business hackathon that provides you with unparalleled opportunities to ideate and showcase your innovative solutions to problems."
        />
        <Event
          img={Startupvit}
          fit="fit"
          name="Start-up VIT"
          desc="Commendable and cutting-edge startup ideas are what change the world. Start-Up VIT is a tech business plan competition which paves a way for you to present your ideas to a professional panel of judges and to get incubated under VIT-TBI"
        />
        <Event
          img={Futurepreneurs}
          fit="fit"
          name="Futurep₹eneurs"
          desc="Students may come and go every year, but the spirit of entrepreneurship that flows amongst them never dies. With Futurepreneurs, put yourself in the shoes of a CEO and conquer the challenges ahead of you. Take a glance at what it’s like to be a part of a startup and dive into the world of business with our annual, wildly popular graVITas event."
        />
        <Event
          img={b2b}
          fit="fit"
          name="Back 2 Business "
          desc="Jump right into the entrepreneurial world and feel the surge of motivation with Back 2 Business where esteemed speakers open the doors to the business world and give your ideas an impeccable start"
        />
        <Event
          img={bnb}
          fit="fit"
          name="Business and Beyond"
          desc="Behold a sequence of enlightening and interactive sessions that enlighten you about all the concepts that you need to comprehend to kickstart and thrive in your entrepreneurial journey."
        />
        <Event
          img={Udaan}
          fit="fit"
          name="Udaan"
          desc="A true entrepreneur is a doer and not just a dreamer. Udaan Is A Business Ecosystem Simulation where aspirants get a chance to be familiar with the intricacies of business along with hands on challenges to draft business plans which are financially sustainable and efficient."
        />
        <Event
          img={Scribble}
          fit="fit"
          name="E-Cell Scribbles"
          desc="While it is wise to learn from experience, it is wiser to learn from the experience and knowledge of others. E-Cell Scribbles is our very own Medium publication that provides comprehensive insights on various domains of Business Trends and Technology by our club folks."
        />
        <Event
          img={Alumni}
          fit="fit"
          name="Alumni Talk"
          desc="There's no better teacher than experience and no better preacher than the experienced. Expand the horizons of your knowledge and learn the best ways to deal with obstacles from people who have already been in your shoes in the past."
        />
      </div>
    </>
  );
}

export default Events;
