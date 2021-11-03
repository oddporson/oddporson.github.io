import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Design</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/placeholder-img.png" alt="placeholder image" />
          <h3>Tweeter</h3>
        </div>
        <div className="item">
          <img src="assets/placeholder-img.png" alt="placeholder image" />
          <h3>React Scheduler</h3>
        </div>
        <div className="item">
          <img src="assets/placeholder-img.png" alt="placeholder image" />
          <h3>Pizza Shop</h3>
        </div>
        <div className="item">
          <img src="assets/placeholder-img.png" alt="placeholder image" />
          <h3>Travelling App</h3>
        </div>
        <div className="item">
          <img src="assets/placeholder-img.png" alt="placeholder image" />
          <h3>Tiny App</h3>
        </div>
      </div>
    </div>
  );
}
