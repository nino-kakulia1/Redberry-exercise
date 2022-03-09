import Vector from "../../assets/vector.svg";

import "./style.scss";

function Aplication() {
  return (
    <div className="aplication">
      <h1 className="aplication__title">Submitted Applications</h1>
      <div className="aplication__table">
        <span>1</span>
        <img src={Vector} alt="" />
      </div>
    </div>
  );
}
export default Aplication;
