import "./specials.css";
import React from "react";

export default function Specials() {
  return (
    <section id="menu" className="specials flex ">
      <div className="container ">
        <div className="top flex">
          <h1>This weeks specials!</h1>
        </div>
        <div className="flex cards">
          <div className="card">
            <img src="/icons_assets/greek salad.jpg" alt="" />
            <div className="tittle-card flex">
              <h1>Greek Salad</h1>
              <span>$10.99</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, architecto.
            </p>
            
          </div>
          <div className="card">
            <img src="/icons_assets/bruchetta.svg" alt="" />
            <div className="tittle-card flex">
              <h1>Bruchetta</h1>
              <span>$10.99</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero.
            </p>
            
          </div>

          <div className="card">
            <img src="/icons_assets/lemon dessert.jpg" alt="" />
            <div className="tittle-card flex">
              <h1>Lemon Dessert</h1>
              <span>$10.99</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere temporibus modi atque vel nam?
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
