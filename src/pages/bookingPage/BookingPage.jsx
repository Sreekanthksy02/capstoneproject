import React from "react";
import Header from "../../components/1-header/Header";
import BookingForm from "../../components/bookingForm/BookingForm";
import Footer from "../../components/6-footer/Footer";

export default function BookingPage() {
  return (
    <div>
      <Header />
      <BookingForm />
      <div className="divider" />
      <Footer />
    </div>
  );
}
