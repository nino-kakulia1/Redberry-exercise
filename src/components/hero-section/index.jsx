import Rocketman from "../../assets/rocketman.svg";
import "./style.scss";
function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="hero-section__title">Welcome Rocketeer!</h1>

      <button className="hero-section__button-click">
        Start Questionnaire
      </button>

      <a href="" className="hero-section__subtitle">
        Submitted Applications
      </a>
      <img className="hero-section__image" src={Rocketman} alt="" />
    </div>
  );
}

export default HeroSection;
