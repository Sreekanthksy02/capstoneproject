import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="home" className="header">
      <header className="flex container ">
        <img src="/icons_assets/Logo.svg" alt="aaa" />
        <nav>
          <ul className="flex ">
            <li>
              <HashLink to="/#home">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About Us</HashLink>
            </li>
            <li>
              <HashLink to="/#menu">Menu</HashLink>
            </li>
            <li>
              <HashLink to={"/#testimonials"}>Testimonials</HashLink>
            </li>
            <li>
              <HashLink to={"/booking"}>Reservations</HashLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="icon-menu"
        ></button>
        {showModal && (
          <div className="fixed">
            <ul className="modal ">
              <li>
                <button
                  className="clear"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  x
                </button>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setShowModal(false);
                  }}
                  to="/#home"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setShowModal(false);
                  }}
                  to="/#about"
                >
                  About Us
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setShowModal(false);
                  }}
                  to="/#menu"
                >
                  Menu
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setShowModal(false);
                  }}
                  to={"/#testimonials"}
                >
                  Testimonials
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setShowModal(false);
                  }}
                  to={"/booking"}
                >
                  Reservations
                </HashLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
