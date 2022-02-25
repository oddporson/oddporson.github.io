import "./aboutme.scss";

const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <div className="wrapper">
          <h3>
            Spicy jalapeno bacon ipsum dolor amet short loin cupim bresaola
            fatback landjaeger, cow sausage. Pork belly chicken leberkas sirloin
            rump sausage salami ribeye shankle flank boudin meatball cow
            alcatra. Pork chop bacon drumstick, ball tip pig spare ribs
            landjaeger turkey pork belly buffalo strip steak boudin shoulder.
            Ham shoulder turducken, shankle venison tenderloin ham hock buffalo
            picanha pastrami meatloaf pork chop cupim bacon tail.
          </h3>
          <p>Quote here</p>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/porson.png" alt="porson's posing with nasa" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
