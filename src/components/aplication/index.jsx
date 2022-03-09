import Vector from "../../assets/vector.svg";

import "./style.scss";

function Aplication() {
  return (
    <div className="aplication">
      <h1 className="aplication__title">Submitted Applications</h1>
      <div className="aplication__table">
        <span className="aplication__number">1</span>
        <img src={Vector} alt="" />
      </div>
      <div className="aplication__table">
        <span className="aplication__number">2</span>
        <img src={Vector} alt="" />
      </div>
      <div className="aplication__table">
        <span className="aplication__number">3</span>
        <img src={Vector} alt="" />
      </div>

      <div className="personal-information"></div>
    </div>
  );
}
export default Aplication;
