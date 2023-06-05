import React from "react";
import { useEffect, useState } from "react";
import "../styles/BackToTop.css";

export default function BackToTop() {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 100 ? setScrollActive(true) : setScrollActive(false);
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollActive && (
        <a href="#top" className="back-to-top active" data-back-to-top>
          back to top
        </a>
      )}
    </>
  );
}
