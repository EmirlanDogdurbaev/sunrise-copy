import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import Contacts from "./components/Contacts/Contacts";
import Number from "./components/Number/Number";
import NavButton from "./components/NavButton/NavButton";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <ul className="ul">
        <li className="li1">
       
          <NavLink exact activeClassName="activeLink" to="/home">
          <Logo />
          </NavLink>
        </li>

        <div className="language">
          <li>
            <NavLink activeClassName="activeLink" to="/ru">
             <p> RU</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/eng">
              <p>ENG</p>
            </NavLink>
          </li>
        </div>

        <div className="center">
          <li>
            <NavLink activeClassName="activeLink" to="/projects">
              Projects
              {/* <Projects /> */}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/services">
              Services
              <Services />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/aboutUs">
              About Us <AboutUs />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/blog">
              Blog
              <Blog />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/contacts">
              Contacts
              <Contacts />
            </NavLink>
          </li>
        </div>


        <li>
          <span>
            <p>Call by phone</p> 
            <NavLink activeClassName="activeLink" to="/number">
              +996 771 11 33 55
              <Number />
            </NavLink>
          </span>
        </li>


        <li>
          <NavLink activeClassName="activeLink" to="./button">
            <NavButton />
          </NavLink>
        </li>
      </ul>
  

      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/services" component={Services} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/number" component={Number} />
        <Route path="/navButton" component={NavButton} />



        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
