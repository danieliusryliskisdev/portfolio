import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navigation.scss";

interface NavigationProps {
  setFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTextVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation = ({
  setFadeOut,
  setIsTextVisible,
}: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target.name) {
      setFadeOut(true);
      setTimeout(() => {
        setIsTextVisible(false);
        switch (target.name) {
          case "home":
            navigate("/");
            break;
          case "experience":
            navigate("/experience");
            break;
          case "projects":
            navigate("/projects");
            break;
          case "contact":
            navigate("/contact");
            break;
          default:
            break;
        }
      }, 300);
    }
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {["home", "experience", "projects", "contact"].map((name) => (
          <li key={name} className="navigation__list-item">
            <button
              className={`navigation__button ${
                location.pathname ===
                `/portfolio/${name === "home" ? "" : name}`
                  ? "navigation__button--active"
                  : ""
              }`}
              name={name}
              onClick={handleNavigate}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
