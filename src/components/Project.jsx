import React from "react";
import "../styles/Project.css";

export default function Project({ title, imgUrl, stack, link, repo }) {
  return (
    <div className="project">
      <div className="project__container">
        <img className="project__img" src={imgUrl} alt={title} />
        <h3 className="project__title">{title}</h3>
        <div className="project__stack-container">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project__link-container">
          <a href={link} target="_blank" className="project__live-site btn">
            Live Site
          </a>
          <a href={repo} target="_blank" className="project__repo-link btn">
            Repo Link
          </a>
        </div>
      </div>
    </div>
  );
}
