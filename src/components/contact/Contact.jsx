import { Mail } from "@material-ui/icons";
import "./contact.scss";

const Contact = () => {
  return (
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
  );
};

export default Contact;
