import Calendar from "../../assets/calendar.svg";
import About from "../common/about";
import Pagination from "../common/pagination";
import Abaut from "../common/about";
import "./style.scss";

function Covid() {
  return (
    <div className="covid">
      <div className="covid__container">
        <h1 className="covid__title">Covid Stuff</h1>
        <div className="covid__wrapper">
          <span className="covid__question">
            how would you prefer to work?{" "}
          </span>
          <div className="covid__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> From Sairme Office</label>
          </div>
          <div className="covid__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> From Home</label>
          </div>
          <div className="covid__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> Hybrid</label>
          </div>
        </div>
        <div className="covid__wrapper">
          <span className="covid__question">Did you contact covid 19? :(</span>
          <div className="covid__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> Yes</label>
          </div>
          <div className="covid__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> No</label>
          </div>
        </div>
        <div className="covid__wrapper">
          <span className="covid__date">When?</span>
          <input className="covid__input" type="text" placeholder="Date" />
          <img className="covid__image" src={Calendar} alt="" />
        </div>
        <div className="covid__wrapper">
          <span className="covid__question">Have you been vaccinated?</span>

          <div className="covid__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> Yes</label>
          </div>
          <div className="covid__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> No</label>
          </div>
        </div>
        <div className="covid__wrapper">
          <span className="covid__date">
            When did you get your last covid vaccine?
          </span>
          <input className="covid__input" type="text" placeholder="Date" />
          <img className="covid__image" src={Calendar} alt="" />
        </div>

        <Pagination />
      </div>
      <About />
    </div>
  );
}
export default Covid;
