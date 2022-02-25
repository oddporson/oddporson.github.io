// Components
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutme/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";

// scss
import "./app.scss";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
