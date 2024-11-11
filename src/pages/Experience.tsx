import "../styles/experience.scss";
import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";

export const Experience = () => {
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
    <div className="experience">
      <div className="experience__name">Danielius Ryliškis</div>
      <div className="experience__navigation">
        <Navigation
          setFadeOut={setFadeOut}
          setIsTextVisible={setIsTextVisible}
        />
      </div>
      <div className={`experience__experience ${fadeOut ? "fade-out" : ""}`}>
        <div className="experience__experience__kitm">
          <h2>
            <a
              href="https://kitm.lt/"
              className="experience__experience__kitm__page"
              target="_blank"
            >
              Kauno informacinių technologijų mokykla
            </a>{" "}
            /{" "}
            <a
              className="experience__experience__kitm__diploma"
              href="https://drive.google.com/file/d/158L3t8eLU03Kb7_mMy1GDAFOhOOE7zua/view?pli=1"
              target="_blank"
            >
              Diploma
            </a>
          </h2>
          <p>Oct. 2024</p>
        </div>
        <div className="experience__experience__kitm__info">
          <p>
            <em>JavaScript Developer Modular Training Program</em>
          </p>
          <p>
            Web Development / Software Development Methodologies / Database
            Management
          </p>
        </div>

        <div className="experience__experience__vgtu">
          <h2>
            <a
              href="https://vilniustech.lt/"
              className="experience__experience__vgtu__page"
              target="_blank"
            >
              Vilniaus Gedimino technikos universitetas
            </a>
          </h2>
          <p>Sep. 2023 - Jan. 2024</p>
        </div>
        <div className="experience__experience__vgtu__info">
          <p>
            <em>Artificial intelligence systems</em>
          </p>
          <p>
            Machine Learning Fundamentals / Neural Networks and Deep Learning /
            Electrical Circuits and Systems / Programming Fundamentals
          </p>
        </div>
        <div className="experience__experience__lka">
          <h2>
            <a
              href="https://www.lka.lt/"
              className="experience__experience__lka__page"
              target="_blank"
            >
              Generolo Jono Žemaičio Lietuvos karo akademija
            </a>
          </h2>
          <p>Aug. 2022 - Jul. 2023</p>
        </div>
        <div className="experience__experience__lka__info">
          <p>
            <em>Defence Technology Management</em>
          </p>
          <p>
            Strategic Planning and Project Management / Problem-Solving and
            Debugging Under Pressure / Attention to Detail and Quality Assurance
            / Adaptability and Learning New Technologies
          </p>
        </div>
      </div>
    </div>
  );
};
