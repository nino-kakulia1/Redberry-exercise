import "./style.scss";

function Application() {
  return (
    <div className="application">
      <div className="application__info">
        <span className="application__title"> Personal Information</span>

        <div className="information">
          <label htmlFor=""> First Name</label>
          <input type="" value="" placeholder="Eren"></input>
        </div>
        <div className="information">
          <label htmlFor=""> Last Name</label>
          <input type="" value="" placeholder="Yeager"></input>
        </div>
        <div className="information">
          <label htmlFor="">E Mail</label>
          <input
            type=""
            value=""
            placeholder="eren@wings-of-freedom.ml"
          ></input>
        </div>
        <div className="information">
          <label htmlFor="">Phone</label>
          <input type="" value="" placeholder="+995 591 93 50 80"></input>
        </div>

        <div className="situation">
          <span>Covid Situation</span>
          <div className="information">
            <span className="application__title">
              how would you prefer to work?
            </span>
            <input type="radio" value="" placeholder=""></input>
            <label htmlFor="">From Sairme Office</label>
          </div>
          <div className="information">
            <span>Did you have covid 19?</span>
            <input type="radio" value="" placeholder=""></input>
            <label htmlFor="">Yes</label>
            <label htmlFor="">No</label>
          </div>
          <div className="inforation__date">
            <span className="application__title">
              When did you have covid 19?
            </span>
            <input type="" value="" placeholder="02/24/2022"></input>
            <img src="" alt="" />
          </div>
        </div>
        <div className="information">
          <span className="application__title">Have you been vaccinated?</span>
          <input type="radio" value="" placeholder=""></input>
          <label htmlFor="">Yes</label>
          <input type="radio" value="" placeholder=""></input>
          <label htmlFor="">No</label>
        </div>
        <div className="inforation__date">
          <span className="application__title">
            When did you get covid vaccine?
          </span>
          <input type="" value="" placeholder="02/24/2022"></input>
          <img src="" alt="" />
        </div>
      </div>

      <div className="skillset">
        <span className="application__title">Skillset</span>
        <div className="information">
          <label htmlFor=""> PHP</label>
          <input type="" value="" placeholder="Years of Experience: 3"></input>
        </div>
        <div className="information">
          <label htmlFor="">React</label>
          <input type="" value="" placeholder="Years of Experience: 9"></input>
        </div>
      </div>
    </div>
  );
}
export default Application;
