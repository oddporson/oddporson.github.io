import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Work</h1>
      <div className="top">
        <div className="left">
          <a href="https://www.dukesfineicecream.com/">
            <img
              src="assets/dukesfineicecream.png"
              alt="dukes fine ice cream"
            />
          </a>
        </div>
        <div className="right">
          <div className="title">
            <h1>Duke's Fine Ice Cream</h1>
            <p>Surrey, BC, Canada</p>
          </div>
          <div className="testimonial">
            <h2>Testimonial</h2>
            <p>
              "Working with Porson was great - he's easy to talk to, very
              professional, artistic and had a clear vision to make us look
              slick, modern, and terrific! He listened to our needs and had
              options to meet those needs, as well as options for us to access
              the ongoing back-end data that keeps us informed. He's an
              accomplished photographer who creates images that look way better
              than anything we could have imagined. Friendly, prompt, and
              accurate, Porson gets the job done, and is easy to contact
              whenever adjustments are needed. We highly recommend his
              services!" - Crystal Lynn Guay (Duke's Fine Ice Cream Owner)
            </p>
            {/* <span>- Crystal Lynn Guay (Duke's Fine Ice Cream Owner)</span> */}
          </div>
        </div>
      </div>
      <h1>Projects</h1>
      <div className="bottom">
        <div className="item">
          <a href="https://github.com/jayseo5953/keep-calm-and-travel-on">
            <img src="assets/Tripper.png" alt="traveling app" />
            {/* <h3>Travel App</h3> */}
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/Paahn/lhl-pizza-food-ordering">
            <img src="assets/LHL-Pizza.jpg" alt="pizza shop" />
            {/* <h3>Pizza Shop</h3> */}
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/oddporson/react-scheduler">
            <img src="assets/React-Scheduler.jpg" alt="react scheduler" />
            {/* <h3>Scheduler</h3> */}
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/oddporson/tweeter">
            <img src="assets/Tweeter.png" alt="tweeter" />
            {/* <h3>Tweeter</h3> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
