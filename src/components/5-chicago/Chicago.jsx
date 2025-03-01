import "./chicago.css";
import React from "react";

export default function Chicago() {
  return (
    <section id="about" className="chicago ">
      <div className="container flex ">
        <div className="info ">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi nisi veniam explicabo ipsum delectus cupiditate placeat similique et tempora.
          </p>
        </div>
        <div className="photos flex">
          <img
            className="photo-2"
            src="/icons_assets/Mario and Adrian A.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
