import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/1-header/Header.jsx";
import Hero from "../../components/2-hero/Hero.jsx";
import Specials from "../../components/3-specials/Specials.jsx";
import CustomersSay from "../../components//4-customersSay/CustomersSay.jsx";
import Chicago from "../../components/5-chicago/Chicago.jsx";
import Footer from "../../components/6-footer/Footer.jsx";
export default function Home() {
  const [showScrollBTN, setshowScrollBTN] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);
  return (
    <div id="up">
      <Header />
      {/* <div className="divider" /> */}
      <Hero />
      <Specials />
      <div className="divider" />
      <CustomersSay />
      <div className="divider" />
      <Chicago />
      <div className="divider" />
      <Footer />
    </div>
  );
}
