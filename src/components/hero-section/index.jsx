import Rocketman from "../../assets/rocketman.svg";
import "./style.scss";
function HeroSection() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Welcome Rocketeer!</h1>

      <button className="home-page__button-click">Start Questionnaire</button>

      <a href="" className="home-page__subtitle">
        Submitted Applications
      </a>
      <img className="home-page__image" src={Rocketman} alt="" />
    </div>
  );
}

export default HeroSection;
