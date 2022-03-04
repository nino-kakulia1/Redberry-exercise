import Rocketman from "../../assets/rocketman.svg";
import "./style.scss";
function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="hero-section__title">Welcome Rocketeer!</h1>
      <a className="hero-section__button-click" href="">
        <button>Start Questionnaire</button>
      </a>
      <div className="hero-section__cover">
        <span className="hero-section__subtitle">Submitted Applications</span>
        <img src={Rocketman} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
