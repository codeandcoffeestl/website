import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const eventSection = document.getElementById("events");
      const footerSection = document.getElementById("footer");

      if (eventSection && footerSection) {
        const eventSectionTop = eventSection.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        const footerTop = footerSection.getBoundingClientRect().top + window.scrollY;

        // イベントセクションを過ぎ、フッターに到達する前にボタンを表示
        setIsVisible(scrollPosition > eventSectionTop && scrollPosition < footerTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-up-button"
      onClick={scrollToTop}
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
        zIndex: 10,
      }}
    >
      <button>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;