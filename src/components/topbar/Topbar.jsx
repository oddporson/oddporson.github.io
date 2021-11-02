import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
  <div className="topbar">
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">porsonLee</a>"
        <div className="itemContainer">
        <Person className="icon"/>
        <span>778-123-4567</span>
        </div>
        <div className="itemContainer">
        <Mail className="icon"/>
        <span>porsonlee@gmail.com</span>
        </div>
      </div>
      {/* <h1>Hello.</h1> */}
      <div className="right">this is right</div>
    </div>
  </div>
  )
}
