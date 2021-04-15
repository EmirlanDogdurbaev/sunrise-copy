import classes from "./Services.module.css";
import fisrt from "../../images/fisrt.png";
import second from "../../images/second.png";
import third from "../../images/third.png";

const Services = () => {
  return (
    <div className={classes.Services}>
      <section className={classes.section1}>
        <div className={classes.ser}>
          <h5>SERVICES</h5>
          <h1>We offer a variety of services in development</h1>
        </div>

        <div className={classes.imgCont}>
          <span className={classes.mobile}>
            <img src={fisrt} alt="logo" style={{ width: "325px" , height:"280px"}} />
            <div>
              <h4>Mobile app </h4>
              <p>
                You can order the development, whether for sale, game, for the
                company, or describe to us the basic concept of the project.
                With a loyalty program, online store, CRM system and cloud PBX.
              </p>
            </div>
          </span>
          <span className={classes.desing}>
            <img src={second} alt="logo" style={{ height: "280px" }} />
            <div>
              <h4>Web-site</h4>
              <p>
                We develop individual web services, corporate sites and portals
              </p>
            </div>
          </span>
          <span className={classes.desing}>
            <img
              src={third}
              alt="logo"
              style={{ height: "280px", width: "405px" }}
            />
            <div>
              <h4>Desing</h4>
              <p>
                Web development, the task of which is to design user web
                interfaces for sites or web applications.
              </p>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Services;
