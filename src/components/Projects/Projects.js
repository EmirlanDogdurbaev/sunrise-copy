import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <section>
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

        <div className={classes.card}>
          <article className={classes.asia}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4p>Web-Sites</h4p>
            </span>
          </article>
          <article className={classes.buxara}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>
          <article className={classes.bambook}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>




          <article className={classes.asia}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>

          <article className={classes.buxara}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>

          <article className={classes.bambook}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>


          <article className={classes.asia}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>

          <article className={classes.buxara}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>

          <article className={classes.bambook}>
            <span>
              <h3>Asia-Mol App</h3>
              <h4>Web-Sites</h4>
            </span>
          </article>
        </div>
      </section>
      <footer>
        <div>
          <span>
            <p>Services</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Blog</p>
            <p>Contacts</p>
          </span>
          <span>
            <p>Online store</p>
            <p>Lite-CRM</p>
            <p>Loyalty system</p>
          </span>
          <span>
            <p>Mobile app Web-site</p>
            <p>Desing</p>
            <p>SEO optimization</p>
            <p>Business process automation</p>
            <p>Online store</p>
          </span>
          <span>
            <p>Bishkek, st. Abdumomunov 233 </p>
            <p>+996 771 11 33 55 </p>
            <p>sunrisestudiopro@gmail.com</p>
          </span>
          <span>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>WhatsApp</p>
            <p>Telegram</p>
          </span>
        </div>

        <span className={classes.footerSpan}>
        ©2021 Sunrise Studio
        </span>
      </footer>
    </div>
  );
};

export default Projects;
