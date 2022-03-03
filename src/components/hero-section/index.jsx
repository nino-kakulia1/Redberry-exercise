import Rocketman from "../../assets/rocketman.svg";

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Welcome Rocketeer!</h1>
      <a className="button-click" href="">
        <button>Start Questionnaire</button>
      </a>
      <div className="hero-section__image">
        <span>Submitted Applications</span>
        <img src={Rocketman} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
