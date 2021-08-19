import classes from "./Logo.module.css";
import RotalasLogo from "../img/Rotala_logo.png";

function Logo() {
  const RotalaText = "Rotaļa";
  return (
    <div>
      <section className={classes.headerimgcontainer}>
        <img src={RotalasLogo} alt={RotalaText} />
      </section>
    </div>
  );
}

export default Logo;
