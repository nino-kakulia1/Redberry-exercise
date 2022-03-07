import "./style.scss";

function Covid() {
  return (
    <div className="covid">
      <h1 className="covid__title">Covid Stuff</h1>
      <div className="covid__wrapper">
        <span className="covid__question">how would you prefer to work? </span>
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
    </div>
  );
}
export default Covid;
