import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/airbaby.png" alt="bboy move" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello world, I'm</h2>
          <h1>Porson Lee</h1>
          <h3>
            Freelance <span>Web Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="arrow pointing down" />
        </a>
      </div>
    </div>
  );
}
