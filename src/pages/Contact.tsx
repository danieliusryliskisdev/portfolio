import "../styles/contact.scss";
import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const a = () => {
    return isTextVisible;
  };

  a();

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setIsTextVisible(false);
      }, 1000);
    }
  }, [fadeOut]);

  return (
    <div className="contact">
      <div className="contact__name">Danielius Ryliškis</div>
      <div className="contact__navigation">
        <Navigation
          setFadeOut={setFadeOut}
          setIsTextVisible={setIsTextVisible}
        />
      </div>
      <div className={`contact__contact ${fadeOut ? "fade-out" : ""}`}>
        <a
          href="mailto:danieliusryliskis.dev@gmail.com"
          className="contact__contact__link"
        >
          Email&#8599;
        </a>
        <a
          href="https://www.linkedin.com/in/danieliusryliskis/"
          target="_blank"
          className="contact__contact__link"
        >
          LinkedIn&#8599;
        </a>
        <a
          href="https://github.com/danieliusryliskisdev"
          target="_blank"
          className="contact__contact__link"
        >
          GitHub&#8599;
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/s67dcesouhjilz6d6c1tl/Danielius-Ryli-kis.pdf?rlkey=dudod2ni95zt4vhb6gnpudkpx&dl=1"
          download="DanieliusRyliškis.pdf"
          className="contact__contact__link"
        >
          Resume&#8595;
        </a>
      </div>
    </div>
  );
};
