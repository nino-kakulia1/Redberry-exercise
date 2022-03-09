import "./style.scss";

function Aplication() {
  return (
    <div className="aplication">
      <div className="aplication__info">
        <span>Personal Information</span>

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
            <span>how would you prefer to work?</span>
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
            <span>When did you have covid 19?</span>
            <input type="" value="" placeholder="02/24/2022"></input>
            <img src="" alt="" />
          </div>
        </div>
        <div className="information">
          <span>Have you been vaccinated?</span>
          <input type="radio" value="" placeholder=""></input>
          <label htmlFor="">Yes</label>
          <input type="radio" value="" placeholder=""></input>
          <label htmlFor="">No</label>
        </div>
        <div className="inforation__date">
          <span>When did you get covid vaccine?</span>
          <input type="" value="" placeholder="02/24/2022"></input>
          <img src="" alt="" />
        </div>
      </div>

      <div className="skillset">
        <span>Skillset</span>
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
export default Aplication;
