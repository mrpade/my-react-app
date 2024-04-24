import Button from "./button";

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
          <Button content="Download CV" />
          <Button content="Let's Talk" />
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
