/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* import { useState } from "react"; */;
/* import reactLogo from "./assets/react.svg";
 * import viteLogo from "/vite.svg"; */
import "./App.css";
import { Code, Art, Music } from "./components/Projects";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="site">
        <div className="hero">
          <h2 id="hero-name">Bozhidar Georgiev</h2>
          <div className="hero-nav">
            <Link to="" className="nav">
              <span className="arrow">{">"}</span>
              About Me
            </Link>
            <Link to="" className="nav">
              <span className="arrow">{">"}</span>
              Portfolio
            </Link>
            <Link to="" className="nav">
              <span className="arrow">{">"}</span>
              Something
            </Link>
            <Link to="" className="nav">
              <span className="arrow">{">"}</span>
              Contact
            </Link>
          </div>
          <p>
            <span className="temporary">
              Images used are from Unsplash.
              <br /> Music used is from{" "}
              <Link to="http://devilmayquake.com" target="_blank">
                ULTRAKILL
              </Link>
              .
            </span>
            <br />
            Copyright 2024 &copy; Bozhidar Georgiev
          </p>
        </div>
        <div className="main">
          <div className="about-me">
            <h3>About Me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              at dictum augue, nec tempus sem. Vestibulum elit tellus, faucibus
              tincidunt dapibus nec, bibendum non justo. Praesent et facilisis
              mauris. Pellentesque congue nec urna a molestie. Proin tempor leo
              at eros imperdiet, ac scelerisque risus finibus. Nulla laoreet in
              eros volutpat ultricies. Donec interdum in augue a scelerisque.
              Vivamus vel lorem feugiat, ultricies purus nec, aliquet lorem.
              Nullam accumsan arcu elit, sit amet fermentum velit condimentum
              elementum. Nunc tempor neque et pulvinar tincidunt. Nulla
              facilisi. Proin pulvinar orci eget enim gravida aliquam.
            </p>
            <p>
              Aenean quis libero augue. Suspendisse consequat consequat varius.
              Donec sit amet orci mattis, euismod tellus malesuada, lacinia
              felis. Ut placerat, urna non cursus pulvinar, nulla neque
              elementum sapien, a consectetur velit nisi a odio. Nullam lacus
              leo, sodales aliquet nibh non, placerat laoreet turpis. Curabitur
              semper sollicitudin magna at aliquet. Vestibulum feugiat turpis id
              libero pellentesque euismod. Pellentesque in ante suscipit dolor
              bibendum rutrum.
            </p>
            <p>
              Etiam feugiat non mauris eu egestas. Etiam luctus eget tellus et
              congue. Proin commodo mi at turpis aliquam porta. Aliquam auctor
              enim ac ipsum imperdiet consectetur. Integer pharetra sagittis
              bibendum. In ornare mi metus, eu placerat urna vehicula et.
              Maecenas non dictum metus. Vivamus malesuada dapibus urna nec
              fermentum. Etiam efficitur egestas urna, et sollicitudin arcu
              blandit rhoncus. Sed enim ipsum, lacinia at suscipit ut, facilisis
              at ante. Nullam quis convallis elit.
            </p>
          </div>
          <div className="portfolio">
            <div className="container">
              <h3>Projects</h3>
              <div className="projects">
                <Code
                  imagePath="img/andrea-de-santis-g6nPslCoXDs-unsplash.jpg"
                  projectName="Project Name"
                  projectDescription="A simple description of the project that just so happens to be exactly three lines."
                />
                <Code
                  imagePath="img/neom-g6Me5mUQQIQ-unsplash.jpg"
                  projectName="Project Name"
                  projectDescription="A simple description of the project that just so happens to be exactly three lines."
                />
              </div>
            </div>

            <div className="container">
              <h3>Art</h3>
              <Art
                imagePath="img/neom-s0A8sa9oasY-unsplash.jpg"
                artName="Art Name"
              />
              <Art
                imagePath="img/neom-tuEtpjghVmg-unsplash.jpg"
                artName="Art Name"
              />
            </div>

            <div className="container">
              <h3>Music</h3>
              <div className="musics">
                <Music
                  imagePath="img/ultrakill-infinite-hyperdeath-cover.jpg"
                  musicPath="audio/Heaven Pierce Her - Into the Fire.mp3"
                  artistName="Heaven Pierce Her"
                  musicName="Info the Fire"
                />
                <Music
                  imagePath="img/ultrakill-imperfect-hatred-cover.png"
                  musicPath="audio/Heaven Pierce Her - Dune Eternal.mp3"
                  artistName="Heaven Pierce Her"
                  musicName="Dune Eternal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*
img/andrea-de-santis-g6nPslCoXDs-unsplash.jpg
img/neom-g6Me5mUQQIQ-unsplash.jpg
img/neom-s0A8sa9oasY-unsplash.jpg
img/neom-tuEtpjghVmg-unsplash.jpg
img/samuel-arkwright-_V4dS5_NFfs-unsplash.jpg
img/trevor-vannoy-GtWsGhRdrss-unsplash.jpg
 */
