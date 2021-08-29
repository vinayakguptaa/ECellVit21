import { useEffect } from "react";

import landingStyles from "../styles/Landing.module.css";

import Image from "next/image";
import ecellLogo from "../public/logos/ecell-vit-logo.png";

function NavItems(props) {
  if (props.active) {
    return (
      <>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#about">About Us</a>
          </div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#events">Events</a>
          </div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#team">Our Team</a>
          </div>
        </div>
        <div className={landingStyles.navItemContainer}>
          <div className={landingStyles.navItem}>
            <a href="#gallery">Gallery</a>
          </div>
        </div>
      </>
    );
  }
  return "";
}

function mlPopUp() {
  (function (m, a, i, l, e, r) {
    m["MailerLiteObject"] = e;
    function f() {
      var c = { a: arguments, q: [] };
      var r = this.push(c);
      return "number" != typeof r ? r : f.bind(c.q);
    }
    f.q = f.q || [];
    m[e] = m[e] || f.bind(f.q);
    m[e].q = m[e].q || f.q;
    r = a.createElement(i);
    var _ = a.getElementsByTagName(i)[0];
    r.async = 1;
    r.src = l + "?v" + ~~(new Date().getTime() / 1000000);
    _.parentNode.insertBefore(r, _);
  })(
    window,
    document,
    "script",
    "https://static.mailerlite.com/js/universal.js",
    "ml"
  );

  var ml_account = ml("accounts", "3319915", "a8u7f2p5f6", "load");

  var ml_webform_4496056 = ml_account("webforms", "4496056", "k2q3g9", "load");
  ml_webform_4496056("animation", "fadeIn");

  ml_webform_4496056("show");
}

export default function Nav(props) {
  return (
    <>
      <div className={landingStyles.navContainer}>
        <div className={landingStyles.ecellLogoContainer}>
          <Image src={ecellLogo} alt="E-Cell VIT" />
        </div>
      </div>

      <div
        className={landingStyles.navContainer}
        style={{ flexDirection: "row-reverse" }}
      >
        <div className={landingStyles.navbarContainer}>
          <NavItems active={props.active} />

          <div className={landingStyles.navItemContainer}>
            <div className={landingStyles.navItem}>
              <div className={landingStyles.navSubBtn} onClick={mlPopUp}>
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
