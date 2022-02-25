import { Person, Mail } from "@material-ui/icons";

import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
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
      </div>
      <div className="footer">
        <div className="itemContainer">
          <img src="assets/github.png" alt="github" />
          <a href="https://github.com/oddporson">
            <span>oddporson</span>
          </a>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>porsonlee@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
