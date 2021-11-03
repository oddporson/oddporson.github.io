import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      cursorChar: "|",
      strings: ["Web Developer ", "Digital Marketer ", "Dancer "],
      typeSpeed: 70,
      backSpeed: 35,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/airbaby.png" alt="bboy move" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello world, I'm </h2>
          <h1>Porson Lee</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="arrow pointing down" />
        </a>
      </div>
    </div>
  );
}
