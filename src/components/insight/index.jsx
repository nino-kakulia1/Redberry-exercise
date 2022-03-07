import Pagination from "../common/pagination";
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
        ]
      </div>
      <div className="about">
        <h1 className="about__title">Redberrian Insights</h1>
        <p className="about__description">
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>
    </div>
  );
}

export default Insight;
