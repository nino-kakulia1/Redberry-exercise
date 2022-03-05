import { Link } from "react-router-dom";
import Rocketman from "../../assets/rocketman.svg";
import "./style.scss";
function HeroSection() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Welcome Rocketeer!</h1>

      <Link to="personal-infomation">
        <button className="home-page__button-click">Start Questionnaire</button>
      </Link>
      <a href="" className="home-page__subtitle">
        Submitted Applications
      </a>
      <img className="home-page__image" src={Rocketman} alt="" />
    </div>
  );
}

export default HeroSection;
