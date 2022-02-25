import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {/* <li className="active">Featured</li> */}
        {/* <li>Web App</li>
        <li>Design</li> */}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/Tripper.png" alt="traveling app" />
          <h3>Travelling App</h3>
        </div>
        <div className="item">
          <img src="assets/LHL-Pizza.jpg" alt="pizza shop" />
          <h3>Pizza Shop</h3>
        </div>
        <div className="item">
          <img src="assets/React-Scheduler.jpg" alt="react scheduler" />
          <h3>React Scheduler</h3>
        </div>
        <div className="item">
          <img src="assets/Tweeter.png" alt="tweeter" />
          <h3>Tweeter</h3>
        </div>
        {/* <div className="item">
          <img src="assets/placefholder-img.png" alt="tiny app" />
          <h3>Tiny App</h3>
        </div> */}
      </div>
    </div>
  );
}
