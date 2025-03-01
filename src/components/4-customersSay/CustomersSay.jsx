import "./customersSay.css";
import React from "react";
const customers = [
  {
    rating: "★★☆",
    customerImg: "/icons_assets/1.jpg",

    customerName: "rodri",
    testimonial:
      "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
  },
  {
    rating: "★★★",
    customerImg: "/icons_assets/2.jpg",
    customerName: "sara",
    testimonial:
      "I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!",
  },
  {
    rating: "★★★",
    customerImg: "/icons_assets/3.jpg",
    customerName: "Ahmad",
    testimonial:
      "I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. ",
  },
];
export default function CustomersSay() {
  return (
    <div id="testimonials" className="cutomer ">
      <div className="container ">
        <h1>Testimonials</h1>
        <section className="cards flex">
          {customers.map((item) => {
            return (
              <article key={item.customerImg} className="card ">
                <div className="info flex">
                  <img src={item.customerImg} alt="img" />
                  <p>{item.customerName}</p>
                </div>
                <span>{item.rating}</span>
                <p>{item.testimonial}</p>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
