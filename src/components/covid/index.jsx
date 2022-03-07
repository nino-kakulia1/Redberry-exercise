import "./style.scss";

function Covid() {
  return (
    <div className="covid">
      <h1 className="covid__title">Covid Stuff</h1>
      <div className="covid__question">
        <span>how would you prefer to work? </span>

        <input type="radio" value=""></input>
        <label htmlFor=""> From Sairme Office</label>
        <input type="radio" value=""></input>
        <label htmlFor=""> From Home</label>
        <input type="radio" value=""></input>
        <label htmlFor=""> Hybrid</label>
      </div>
    </div>
  );
}
export default Covid;
