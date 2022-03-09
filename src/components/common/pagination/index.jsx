import Left from "../../../assets/left.svg";
import Right from "../../../assets/right.svg";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const steps = ["/personal-info", "/skills", "/covid", "/insight", "/submit"];
function Pagination() {
  const location = useLocation();

  const locationIndex = steps.indexOf(location.pathname);

  return (
    <div className="pagination">
      <Link to={locationIndex === 0 ? "/" : steps[locationIndex - 1]}>
        <img className="pagination__left-arrow" src={Left} alt="" />
      </Link>
      <div className="pagination__container">
        {steps.map((step, index) => (
          <Link
            className={`pagination__item ${
              index <= locationIndex ? "pagination__item--active" : ""
            }`}
            key={step}
            to={step}
          />
        ))}
      </div>
      <Link to={steps[locationIndex + 1]}>
        <img className="pagination__right-arrow" src={Right} alt="" />
      </Link>
    </div>
  );
}
export default Pagination;
