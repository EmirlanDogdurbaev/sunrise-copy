import classes from "./AboutUs.module.css";
import background from "../../images/background.jpg"


const AboutUs = () => {
  return (
    <div className={classes.AboutUs}>
      <section className={classes.bigCont}>
        <div className={classes.sec}>
          <h5>IT LEADERS</h5>
          <h1>The most creative and biggest studio in Kyrgyzstan</h1>

          <p>
          Entrust the creation and promotion of your business to a team of studio professionals and you will receive a ready-made tool that will work effectively for you and make a profit. We will create everything according to your order, monitor its performance, and ensure the growth of the number of potential customers for your business.
          </p>
        </div>


        <div className={classes.cont1}>
          <span>
            <h1>+ 30</h1>
            <p>+ 30 In our team more than 40 Certified specialists</p>
          </span>


          <span>
            <h1>+ 300</h1>
            <p>+300 We have implemented over 150 websites and 45 mobile applications</p>
          </span>

          <span>
            <h1>+ 10</h1>
            <p>+10 Years on the market</p>
          </span>
          </div>
          <span className={classes.imgSpan}>
            <img src={background} alt="download"></img>
          </span>
        
      </section>
    </div>
  );
};

export default AboutUs;
