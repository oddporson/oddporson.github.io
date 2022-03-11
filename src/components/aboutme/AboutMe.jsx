import "./aboutme.scss";

const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <div className="wrapper">
          <h2>
            I was born with hard of hearing in Hong Kong and raised in
            Vancouver, BC, Canada. I'm a self-employed web developer and work as
            a sales manager at a non-profit agency, Wavefront Centre for
            Communication Accessibility.
          </h2>
          {/* <br /> */}
          <h2>
            I helped lay the foundation for my store that sells communication
            assistive devices for people with hearing loss. I've helped
            streamline sales, marketing activities for the store and raise
            awareness about the company.
          </h2>
          {/* <br /> */}
          <h2>
            I see myself as a curious, adaptable student always looking for new
            challenges and striving for improvement. I'm passionate about
            programming and noticed that there aren't a lot of available
            assistive apps for the Deaf and Hard of Hearing communities
            communicate with society. I'm working toward contributing to an
            existing live ASL translation application.
          </h2>
          {/* <br /> */}
          <p>
            "I think that we're at our best when we support each other. Not when
            we cancel each other for past mistakes, but when we help each other
            grow, when we educate each other, when we guide each other towards
            redemption. That is the best of humanity" - Joaquin Phoenix
          </p>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/porson.jpg" alt="porson's posing with nasa" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
