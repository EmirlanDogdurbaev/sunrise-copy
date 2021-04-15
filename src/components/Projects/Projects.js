
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <div className={classes.cont}>
        <h1>Creative digital advertising company.</h1>
        <p>
          We have helped more than 2,000 brands and companies around the world
          and are proud to be recommended as an effective business partner.
        </p>
      </div>
      <div className={classes.miniCont}>
        <span>
          <p>All</p>
          <p>Mobile app</p>
        </span>
        <span>
          <p>Medicine</p>
          <p>Online store</p>
        </span>
        <span>
          <p>Mobile games</p>
          <p>Web-sites</p>
        </span>
        <span>
          <p>Web-сайт/Моб.приложение</p>
        </span>
      </div>
    </div>
  );
};

export default Projects;
