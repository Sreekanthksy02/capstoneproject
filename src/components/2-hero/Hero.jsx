import React from "react";
import "./hero.css";
import { HashLink } from "react-router-hash-link";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="container flex">
        <div className="title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt consequatur earum autem accusantium, veritatis voluptatem eligendi accusamus consectetur quas!
          </p>
          <HashLink className="hashLink" to={"/booking"}>
            Reservations
          </HashLink>
        </div>
        <img className="" src="/icons_assets/restauranfood.jpg" alt="" />
      </div>
    </section>
  );
}
