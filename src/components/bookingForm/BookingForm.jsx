import React from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./bookingForm.css";
const BookingSchema = Yup.object().shape({
  date: Yup.string().required("*This feild is required"),
  time: Yup.string().required("*This feild is required"),
  guests: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("*This feild is required"),
  occasion: Yup.string().required("*This feild is required"),
});
export default function BookingForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validationSchema: BookingSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setSuccessMessage("Successfully.");
    },
  });
  return (
    <div className="booking">
      <h1>Book now!</h1>
      <div className="container">
        <div className="">
          <form onSubmit={formik.handleSubmit} className="flex">
            <div className="date flex">
              <label htmlFor="date">Choose date:</label>
              <input
                type="date"
                id="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="date"
                value={formik.values.date}
              />
            </div>
            <div className="error">
              {formik.touched.date && formik.errors.date}
            </div>

            <div className="time flex ">
              <label htmlFor="time">Choose time:</label>
              <select
                id="time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="time"
                value={formik.values.time}
              >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>

              <div className="error">
                {formik.touched.time && formik.errors.time}
              </div>
            </div>
            <div className="guests flex ">
              <label htmlFor="guests">Number of guests:</label>
              <input
                type="number"
                id="guests"
                min={0}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="guests"
                value={formik.values.guests}
              />
            </div>
            <div className="error">
              {formik.touched.guests && formik.errors.guests}
            </div>

            <div className="occasion flex ">
              <label htmlFor="occasion">Occasion:</label>
              <input
                id="occasion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="occasion"
                value={formik.values.occasion}
              />

              <div className="error">
                {formik.touched.occasion && formik.errors.occasion}
              </div>
            </div>
            <div className="submit flex">
              <input id="submit" type="submit" value="Make Your reservation" />
              {successMessage && (
                <div className="success">
                  <p>{successMessage}</p>

                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
