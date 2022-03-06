import Left from "../../../assets/left.svg";
import Right from "../../../assets/right.svg";
import { Link } from "react-router-dom";
import "./style.scss";

function Pagination() {
  return (
    <div className="pagination">
      <img className="pagination__left-arrow" src={Left} alt="" />
      <div className="pagination__container">
        <div className="pagination__item"></div>
        <div className="pagination__item"></div>
        <div className="pagination__item"></div>
        <div className="pagination__item"></div>
        <div className="pagination__item"></div>
      </div>
      <img className="pagination__right-arrow" src={Right} alt="" />
    </div>
  );
}
export default Pagination;
