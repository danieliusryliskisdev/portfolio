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
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [fadeOut]);

  return (
    <div className="projects">
      {/* Header Section */}
      <header className="projects__header">
        <div className="projects__name">Danielius Ryliškis</div>
        <Navigation
          setFadeOut={setFadeOut}
          setIsTextVisible={setIsTextVisible}
        />
      </header>

      {/* Projects Content Section */}
      <main className={`projects__content ${fadeOut ? "fade-out" : ""}`}>
        {/* Individual Project */}

        <h2 className="projects__title">
          Fullstack E-Commerce Platform – Currently Under Development
        </h2>
        <p className="projecst__date">Nov. 2024</p>
        <div className="projects__details">
          <p className="projects__description">
            <strong>Description: </strong>A dynamic and feature-rich e-commerce
            platform inspired by eBay, designed to offer a seamless and
            user-friendly experience for buying and selling products. This
            platform will cater to both individual sellers and buyers, providing
            robust features
          </p>
          <p className="projects__tech">
            <strong>Technologies Used:</strong> TypeScript, JavaScript, HTML,
            CSS, SASS, React, Node.js, Express, MongoDB, Redux, Git and GitHub,
            Vite, Tailwind CSS, JWT, RESTful APIs.
          </p>

          <div className="projects__tech">
            <p>
              <strong>Features: </strong>
              User authentication (registration, login, and account management).
              Admin dashboard to manage users, categories, and products.
              User-side interface for browsing, searching, and purchasing
              products. Real-time updates for product availability and inventory
              tracking.
            </p>

            <p>Secure payment integration (planned).</p>
          </div>
        </div>
      </main>
    </div>
  );
};
