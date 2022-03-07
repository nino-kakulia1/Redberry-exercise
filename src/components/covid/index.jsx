import Calendar from "../../assets/calendar.svg";
import Pagination from "../common/pagination";
import "./style.scss";

function Covid() {
  return (
    <div className="covid">
      <div className="covid__conteiner">
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
      <div className="about">
        <h1 className="about__title">Redberry Origins</h1>
        <p className="about__description">
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
}
export default Covid;
