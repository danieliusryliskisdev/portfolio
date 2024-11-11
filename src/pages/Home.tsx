import "../styles/home.scss";
import { Navigation } from "../components/Navigation";
import { useState } from "react";

export const Home = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div className="home">
      <div className="home__name">Danielius Ryliškis</div>
      <div className="home__navigation">
        <Navigation
          setFadeOut={setFadeOut}
          setIsTextVisible={setIsTextVisible}
        />
      </div>
      {isTextVisible && (
        <div className={`home__text ${fadeOut ? "fade-out" : ""}`}>
          I’m passionate about turning ideas into functional, high-quality
          applications and constantly honing my skills to stay current with
          industry trends. With a focus on creating responsive websites and
          engaging user experiences, I bring dedication to every project and
          embrace new tools and technologies. I’m eager to tackle challenges and
          make meaningful contributions to innovative teams and projects.
        </div>
      )}
    </div>
  );
};
