import "./style.scss";

function PersonalInfo() {
  return (
    <div className="personal-info">
      <h1 className="personal-info__title">
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <div className="personal-info__wrapper">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="E Mail" />
        <input type="text" placeholder="+995 5__ __ __ __" />
      </div>
    </div>
  );
}

export default PersonalInfo;
