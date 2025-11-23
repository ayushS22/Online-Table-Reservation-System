import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about food.</p>
            </div>
            <p className="mid">
             Welcome to Online Table Reservation System, where great food meets a warm dining
              experience. We are committed to serving delicious, freshly
              prepared meals using high-quality ingredients. Whether you're
              dining in or reserving a table online, we ensure a seamless
              experience with attentive service and a comfortable ambiance. Your
              satisfaction is our priority, and every plate reflects our passion
              for food and hospitality.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};


export default About;
