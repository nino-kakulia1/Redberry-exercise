import Pagination from "../common/pagination";
import Abaut from "../common/about";
import "./style.scss";

function Insight() {
  return (
    <div className="coment">
      <div className="coment__content">
        <h1 className="coment__title">What about you?</h1>
        <div className="coment__wrapper">
          <span className="coment__question">
            Would you attend Devtalks and maybe also organize your own?
          </span>

          <div className="coment__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> Yes</label>
          </div>
          <div className="coment__radio">
            <input type="radio" value=""></input>
            <label htmlFor=""> No</label>
          </div>
        </div>
        <div className="coment__wrapper">
          <span className="coment__date">
            What would you speak about at Devtalk?
          </span>
          <input
            className="coment__input"
            type="text"
            placeholder="I would..."
          />
        </div>
        <div className="coment__wrapper">
          <span className="coment__date">Tell us something special</span>
          <input className="coment__input" type="text" placeholder="I..." />
          <Pagination />
        </div>
        <Abaut />
      </div>
    </div>
  );
}

export default Insight;
