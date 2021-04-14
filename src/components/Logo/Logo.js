import classes from "./Logo.module.css";
import logoTop from "../../images/logoTop.svg";
import logoBottom from "../../images/logoBottom.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={logoTop} alt="logo" className={classes.top} />
      </Link>
      <Link to="/">
        <img src={logoBottom} alt="logo" className={classes.bottom} />
      </Link>
    </div>
  );
};

export default Logo;
