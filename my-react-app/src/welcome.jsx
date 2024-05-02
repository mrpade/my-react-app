import Button from "./button";
import { FaDownload } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa6";

function Welcome() {
  return (
    <div className="welcome">
      <div id="welcome-text">
        <p>
          Hello! My name is <span id="my-name">Patrick ADE</span>
          <br></br>
          I&apos;m a Creative Thinker & Solver <br></br> classified by society
          as Graphic <br></br>
          Designer, Frontend Web <br></br> Developer and Photographer
        </p>
        <div id="welcome-cta">
          <button>
            Download CV
            <FaDownload className="fa-icons" />
          </button>
          <button>
            Let&apos;s talk
            <FaEnvelopeOpen className="fa-icons"/>
          </button>
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div id="welcome-visuals">
          <div id="logo-icon">
            <img src="/src/assets/logoPart1.svg" className="mr-icon" id="mr-icon1"></img>
            <img src="/src/assets/logoPart2.svg" className="mr-icon" id="mr-icon2"></img>
            <img src="/src/assets/logoPart3.svg" className="mr-icon" id="mr-icon3"></img>
          </div>
          <div id="welcome-img">
            <img src="/src/assets/Me-Hero.svg"></img>
          </div>
      </div>
    </div>
  );
}

export default Welcome;
