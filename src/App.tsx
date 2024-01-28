/* import { useState } from "react"; */
/* import reactLogo from "./assets/react.svg";
 * import viteLogo from "/vite.svg"; */
import "./App.css";
import { Code, Art, Music } from "./components/Projects";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faReact,
  faJava,
  faLinux,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <div className="site">
        <div className="hero">
          <h2 id="hero-name">Bozhidar Georgiev</h2>
          <div className="hero-nav">
            <a href="#about-me" className="nav">
              About Me
            </a>
            <a href="#portfolio" className="nav">
              Portfolio
            </a>
            <a href="#skills" className="nav">
              Something
            </a>
            <a href="#contact" className="nav">
              Contact
            </a>
            <div className="socials">
              <Link to="https://github.com/georgiev-bozhidar" target="_">
                <FontAwesomeIcon
                  className="icon"
                  icon={faGithub}
                  size={"2x"}
                  color={"#000000"}
                />
              </Link>
              <Link
                to="https://linkedin.com/in/bozhidar-georgiev-71b75520a/"
                target="_"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faLinkedin}
                  size={"2x"}
                  color={"#000000"}
                />
              </Link>
            </div>
            {/* <Link to="#about-me" className="nav">
                About Me
                </Link>
                <Link to="#portfolio" className="nav">
                Portfolio
                </Link>
                <Link to="#something" className="nav">
                Something
                </Link>
                <Link to="#contact" className="nav">
                Contact
                </Link> */}
          </div>
        </div>
        <div className="main">
          <div id="about-me">
            <h3>About Me</h3>
            {/* <h4>Hello!</h4> */}
            <p>
              Hello! My name is Bozhidar Georgiev. I am a Full Stack Web
              Developer with <span className="strong">React</span> and{" "}
              <span className="strong">Spring Boot</span>.
            </p>
          </div>
          <div id="portfolio">
            <h3>Projects</h3>
            <div className="projects">
              {/* <Code
                  imagePath="/img/andrea-de-santis-g6nPslCoXDs-unsplash.jpg"
                  projectName="Project Name"
                  projectDescription="A simple description of the project that just so happens to be exactly three lines."
                  />
                  <Code
                  imagePath="/img/neom-g6Me5mUQQIQ-unsplash.jpg"
                  projectName="Project Name"
                  projectDescription="A simple description of the project that just so happens to be exactly three lines."
                  /> */}
              <p>Coming soon...</p>
            </div>

            <h3>Art</h3>
            <div className="art">
              {/* <Art
                  imagePath="/img/neom-s0A8sa9oasY-unsplash.jpg"
                  artName="Art Name"
                  />
                  <Art imagePath="/img/neom-tuEtpjghVmg-unsplash.jpg" /> */}

              <p>Coming soon...</p>
            </div>

            <h3>Music</h3>
            <div className="musics">
              {/* <Music
                  imagePath="/img/ultrakill-infinite-hyperdeath-cover.jpg"
                  artistName="Heaven Pierce Her"
                  musicName="Into the Fire"
                  />
                  <Music
                  imagePath="/img/ultrakill-imperfect-hatred-cover.png"
                  artistName="Heaven Pierce Her"
                  musicName="Dune Eternal"
                  /> */}
              <p>Coming soon...</p>
            </div>
          </div>
          <div id="skills">
            <h3>Skills</h3>
            <ul className="skill-list front-end">
              <li className="front-end">
                <ul>
                  <li>
                    <h4>
                      <span className="strong">Front End</span>
                    </h4>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faCode} color={"#000000"} />{" "}
                        HTML/CSS
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faReact} color={"#000000"} />{" "}
                        React
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="back-end">
                <ul>
                  <li>
                    <h4>
                      <span className="strong">Back End</span>
                    </h4>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faJava} color={"#000000"} /> Java
                      </li>
                      <li>Spring Boot</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="other">
                <ul>
                  <li>
                    <h4>
                      <span className="strong">Other</span>
                    </h4>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faLinux} color={"#000000"} />{" "}
                        Linux
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="contact">
            <h3>Contact</h3>
          </div>
        </div>
        <div className="footer">
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
      </div>
    </>
  );
}

export default App;

/*
/img/andrea-de-santis-g6nPslCoXDs-unsplash.jpg
/img/neom-g6Me5mUQQIQ-unsplash.jpg
/img/neom-s0A8sa9oasY-unsplash.jpg
/img/neom-tuEtpjghVmg-unsplash.jpg
/img/samuel-arkwright-_V4dS5_NFfs-unsplash.jpg
/img/trevor-vannoy-GtWsGhRdrss-unsplash.jpg
 */
