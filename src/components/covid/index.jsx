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
      <About
        title="Redberry Covid Policies"
        description="As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. "
      />
    </div>
  );
}
export default Covid;
