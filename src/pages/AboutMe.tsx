import { ReactSVG } from "react-svg";

export default function AboutMe() {
  return (
    <>
      <ReactSVG className="svg" src="/svg/bg-fill-edited.svg" />

      <div id="about-me">
        <h3>About Me</h3>
        {/* <h4>Hello!</h4> */}
        <p>
          Hello! My name is Bozhidar Georgiev. I am a Full Stack Web Developer
          with <span className="strong">React</span> and{" "}
          <span className="strong">Spring Boot</span>.
        </p>
      </div>
    </>
  );
}
