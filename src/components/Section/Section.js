import classes from "./Section.module.css";
import img from "../../images/img.png"

const Section = () => {
  return (
    <section className={classes.Section}>
      <div>
        <p>
        We are a leading company in Kyrgyzstan. Also, design development, creation and support of large IT projects
        </p>
        <img src={img} alt="download" className={classes.images} />
      </div>
     
    </section>
  );
};

export default Section;