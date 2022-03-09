import "./style.scss";

function About(props) {
  return (
    <div className="about">
      <h1 className="about__title">{props.title}</h1>
      <p className="about__description">{props.description}</p>
    </div>
  );
}

export default About;
