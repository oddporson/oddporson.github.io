import { Mail, GitHub, LinkedIn } from "@material-ui/icons";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="pun">
        <h1>
          Are you ready to get <span>porsonal</span> with me?
        </h1>
        <h2>Let's chat!</h2>
      </div>
      <div className="container">
        <div className="itemContainer">
          <GitHub className="icon" />
          <a href="https://github.com/oddporson">
            <span>oddporson</span>
          </a>
        </div>
        <div className="itemContainer">
          <LinkedIn className="icon" />
          <a href="https://www.linkedin.com/in/porsonlee/">
            <span>porsonlee</span>
          </a>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>porsonlee@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
