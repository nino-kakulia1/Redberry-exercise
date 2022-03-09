import About from "../common/about";
import Pagination from "../common/pagination";
import Abaut from "../common/about";

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
      <About />
    </div>
  );
}

export default PersonalInfo;
