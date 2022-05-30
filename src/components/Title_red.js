import React from "react";
import imageInSrc from "../../src/imageInSrc.png";
import style from "../components/style.css";
function Title_red() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={imageInSrc} />
        <br />
        <img src="/imageInPublic.jpg" />
      </div>
      <video width={320} height={240} controls="autoplay">
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Title_red;
