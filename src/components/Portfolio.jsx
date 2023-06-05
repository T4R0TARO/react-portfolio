import React from "react";
import Project from "./Project";
import PortfolioData from "../data/portfolio";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">projects</h2>
      <div className="portfolio__container">
        {PortfolioData.map((project) => (
          <Project
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
}
