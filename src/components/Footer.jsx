import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyrite">
          &copy; 2023{" "}
          <a href="#" className="copyright__link">
            joshManansala
          </a>
          . All Rights Reserved
        </p>
        <ul className="footer__list">
          <li>
            <a
              href="https://github.com/T4R0TARO"
              target="_blank"
              className="footer__link"
            >
              <i className="devicon-github-original"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joshua-manansala-59a40279/"
              target="_blank"
              className="footer__link"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/taro_code"
              target="_blank"
              className="footer__link"
            >
              <i className="devicon-twitter-original"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/T4R0TARO/react-portfolio"
              className="btn"
              target="_blank"
            >
              Repo Link
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
