import Pagination from "../common/pagination";
import Vectorr from "../../assets/vectorr.svg";

import "./style.scss";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__content">
        <h1 className="skills__title">Tell us about your skills</h1>
        <div className="skills__conteiner">
          <input type="text" className="skills__input" placeholder="Skills" />
          <img className="skills__image" src={Vectorr} alt="" />
          <input
            type="text"
            className="skills__input"
            placeholder="Experience Duration in Years"
          />
          <a href="#" className="skills__languages">
            {" "}
            <button className="skills__button">
              Experience Duration in Years
            </button>
          </a>

          <input
            type="text"
            className="skills__input"
            placeholder="Years of Experience: 3"
          />
          <input
            type="text"
            className="skills__input"
            placeholder="Years of Experience: 2"
          />
        </div>
        <Pagination />
      </div>
      <div className="about">
        <h1 className="about__title">A bit about our battles</h1>
        <p className="about__description">
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
}

export default Skills;
