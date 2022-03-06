import Pagination from "../common/pagination";

import "./style.scss";

function PersonalInfo() {
  return (
    <div className="personal-info">
      <div className="personal-info__conteiner">
        <h1 className="personal-info__title">
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <div className="personal-info__wrapper">
          <input
            type="text"
            className="personal-info__input"
            placeholder="First Name"
          />
          <input
            type="text"
            className="personal-info__input"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="personal-info__input"
            placeholder="E Mail"
          />
          <input
            type="text"
            className="personal-info__input"
            placeholder="+995 5__ __ __ __"
          />

          <Pagination />
        </div>
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

export default PersonalInfo;
