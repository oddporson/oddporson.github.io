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
          <h1>hello world.</h1>
          <h2>I'm Porson Lee</h2>
          <h3>
            Freelance <span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="" alt="" />
        </a>
      </div>
    </div>
  );
}
