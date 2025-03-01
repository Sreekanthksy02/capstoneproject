import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

// import ConfirmationPage from "./pages/ConfirmationPage";

import React from "react";
import BookingPage from "./pages/bookingPage/BookingPage";

export default function routes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<BookingPage />} path="/booking" />
      {/* <Route element={<ConfirmationPage />} path="/confirmation" /> */}
    </Routes>
  );
}
