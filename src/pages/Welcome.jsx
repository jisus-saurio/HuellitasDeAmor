import { useNavigate } from "react-router-dom";
import WelcomeText from "../components/WelcomeText";
import "../css/WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="welcome-page">
      {/* Burbujas animadas de fondo */}
      <div className="bubbles-bg">
        {[...Array(15)].map((_, i) => (
          <div className={`bubble bubble-${i + 1}`} key={i}></div>
        ))}
      </div>
      <div className="welcome-content">
        <WelcomeText />
        <div className="call-to-action">
          <h2>¿Quieres encontrar a tu nuevo mejor amigo?</h2>
          <button className="welcome-button" onClick={handleNavigateToHome}>
            ¡Descubre a tus futuros compañeros de aventura!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;