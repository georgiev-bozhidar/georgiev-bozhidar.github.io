import { NavLink, Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Layout() {
  return (
    <>
      <div className="site">
        <div className="hero">
          <h2 id="hero-name">Bozhidar Georgiev</h2>
          <div className="hero-nav">
            <NavLink to="aboutMe" className="nav">
              About Me
            </NavLink>
            <NavLink to="portfolio" className="nav">
              Portfolio
            </NavLink>
            <NavLink to="skills" className="nav">
              Skills
            </NavLink>
            <NavLink to="contact" className="nav">
              Contact
            </NavLink>
            <div className="socials">
              <Link to="https://github.com/georgiev-bozhidar" target="_">
                <FontAwesomeIcon className="icon" icon={faGithub} size={"2x"} />
              </Link>
              <Link
                to="https://linkedin.com/in/bozhidar-georgiev-71b75520a/"
                target="_"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faLinkedin}
                  size={"2x"}
                />
              </Link>
            </div>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>
            <span className="temporary">
              Everything shown is placeholder material.
              <br />
              Images used are from Unsplash.
              <br /> Music and covers used are from{" "}
              <Link to="http://devilmayquake.com" target="_blank">
                ULTRAKILL
              </Link>
              .
            </span>
            <br />
            Copyright 2024 &copy; Bozhidar Georgiev
          </p>
        </footer>
      </div>
    </>
  );
}
