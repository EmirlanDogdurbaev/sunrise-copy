import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <main className={classes.mainHome}>
        <div className={classes.cont}>
          <span>Website development and mobile applications and more

          </span>
          <span>...</span>
          <p>
      "If your business not on the internet , then you are not in the business"  Bill Gates
          </p>
        </div>
        <button>
       See projects
        </button>
      </main>
    </div>
  );
};

export default Home;
