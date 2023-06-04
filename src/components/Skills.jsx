import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h3 className="skills__title">
        {" "}
        here are a few technologies that i've been working with recently
      </h3>
      <div className="skills__grid">
        <i className="skills__img devicon-html5-plain-wordmark colored"></i>
        <i className="skills__img devicon-css3-plain-wordmark colored"></i>
        <i className="skills__img devicon-javascript-plain colored"></i>
        <i className="skills__img devicon-bootstrap-plain-wordmark colored"></i>
        <i className="skills__img devicon-sass-original colored"></i>
        <i className="skills__img devicon-git-plain-wordmark colored"></i>
        <i className="skills__img devicon-github-original-wordmark colored"></i>
        <i className="skills__img devicon-react-original-wordmark colored"></i>
        <i className="skills__img devicon-nodejs-plain-wordmark colored"></i>
        <i className="skills__img devicon-npm-original-wordmark colored"></i>
      </div>

      <h3 className="skills__title">currently learning</h3>
      <div className="skills__grid">
        <i className="skills__img devicon-redux-original colored"></i>
        <i className="skills__img devicon-mongodb-plain-wordmark colored"></i>
        <i className="skills__img devicon-jest-plain colored"></i>
        <i className="skills__img devicon-typescript-plain colored"></i>
        <i className="skills__img devicon-tailwindcss-original-wordmark colored"></i>
        <i className="skills__img devicon-express-original-wordmark colored"></i>
      </div>
    </section>
  );
}
