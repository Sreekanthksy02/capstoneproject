import "./footer.css";
import { HashLink } from "react-router-hash-link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container  flex">
        <img src="/icons_assets/Logo.svg" alt="" />
        <div className="contact ">
          <h1>Contact</h1>
          <p>chicago</p>
          <p>1231231231</p>
          <a href="">littleLemon@sample.com</a>
        </div>
      </div>
    </footer>
  );
}
