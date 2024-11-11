import "../styles/projects.scss";
import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const a = () => {
    return isTextVisible;
  };

  a();

  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => setIsTextVisible(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [fadeOut]);

  return (
    <div className="projects">
      <div className="projects__name">Danielius Ryliškis</div>
      <div className="projects__navigation">
        <Navigation
          setFadeOut={setFadeOut}
          setIsTextVisible={setIsTextVisible}
        />
      </div>
      <div className={`projects__content ${fadeOut ? "fade-out" : ""}`}>
        <div className="projects__content__kitm">
          <h2>Kauno informacinių technologijų mokykla</h2>
          <p>Oct. 2024</p>
        </div>
        <div className="projects__content__kitm__info">
          <p>JavaScript Developer Modular Training Program</p>
          <p>
            Web Development / Software Development Methodologies / Database
            Management
          </p>
        </div>
      </div>
    </div>
  );
};
