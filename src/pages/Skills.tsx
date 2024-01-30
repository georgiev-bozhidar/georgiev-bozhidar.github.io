import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJava,
  faLinux,
  faSquareGit,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <>
      <div id="skills">
        <h3>Skills</h3>
        <div className="skill-list">
          <div className="front-end">
            <h4>
              <span className="strong">Front End</span>
            </h4>
            <div className="skill">
              <FontAwesomeIcon
                className="static-icon"
                icon={faCode}
                size={"1x"}
              />{" "}
              <p>HTML/CSS</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon
                className="static-icon"
                icon={faReact}
                size={"1x"}
              />{" "}
              <p>React</p>
            </div>
          </div>
          <div className="back-end">
            <h4>
              <span className="strong">Back End</span>
            </h4>
            <div className="skill">
              <FontAwesomeIcon
                className="static-icon"
                icon={faJava}
                size={"1x"}
              />
              <p>Java</p>
            </div>
            <div className="skill">
              <span></span>
              <p>Spring Boot</p>
            </div>
          </div>
          <div className="other">
            <h4>
              <span className="strong">Other</span>
            </h4>
            <div className="skill">
              <FontAwesomeIcon
                className="static-icon"
                icon={faLinux}
                size={"1x"}
              />
              <p>Linux</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon
                className="static-icon"
                icon={faSquareGit}
                size={"1x"}
              />
              <p>Git</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon
                className="static-icon"
                icon={faDocker}
                size={"1x"}
              />
              <p>Docker</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
