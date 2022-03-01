import "./topbar.scss";
import { Mail, GitHub } from "@material-ui/icons";
// import GitHubIcon from "@mui/icons-material/GitHub";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            pL
          </a>
          <div className="itemContainer">
            {/* <Person className="icon" /> */}
            {/* <img src="assets/github.png" alt="github" /> */}
            <GitHub className="icon" />
            <a href="https://github.com/oddporson">
              <span>oddporson</span>
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>porsonlee@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
