import React from "react";
import "../styles/About.css";
import AboutImage from "../images/filler-img.png";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__container">
        <h1 className="about__name">josh manansala</h1>
        <p className="about__subtitle">frontend web developer</p>
        <p className="about__city">Santa Clara</p>
        <img className="about__img" src={AboutImage} alt="about image" />
        <h2>I look forward to developing your future features and projects</h2>
        <p className="about__text">
          I enjoy converting designs into responsive and interactive user
          experiences with HTML, CSS, JavaScript, and React. I am actively
          staying current with emerging trends, and ensuring to implement
          industry best practices, as well as adapt to changing modern
          technologies and programs.
        </p>
        <p className="about__text">
          I have an eagerness for self-learning and crave to improve my skills
          to continue to grow as a developer. When I'm not coding, I spend my
          free time, drawing, reading, or enjoying boba.
        </p>
        <a className="view-profile btn" href="#portfolio">
          view portfolio
        </a>
      </div>
    </section>
  );
}
