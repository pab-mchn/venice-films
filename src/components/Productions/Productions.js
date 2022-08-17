import { useState } from "react";
import Banner from "../Banner/Banner";
import VideoProductions from "../VideoProductions/VideoProductions";
import PhotoProductions from "../PhotoProductions/PhotoProductions";
import "./Productions.css";

function Productions() {
  const [clickedVideoProductions, setclickedVideoProductions] = useState("true");
  const [clickedPhotoProductions, setclickedPhotoProductions] = useState("false");

  const handleVideo = () => {
    setclickedVideoProductions("true");
    setclickedPhotoProductions("false");
  };

  const handlePhoto = () => {
    setclickedVideoProductions("false");
    setclickedPhotoProductions("true");
  };

  return (
    <>
      <Banner />
      <div className='container-buttons'>
        <button
          onClick={handleVideo}
          className={clickedVideoProductions === "true" ? "pressed-buttons" : "container-buttons-btn-gradient"}>
          Videos
        </button>
        <button
          onClick={handlePhoto}
          className={clickedPhotoProductions === "true" ? "pressed-buttons" : "container-buttons-btn-gradient"}>
          Phothos
        </button>
      </div>
      {clickedVideoProductions === "true" ? (
        <div className='productions-section-container'>
          <VideoProductions />
        </div>
      ) : (
        ""
      )}
      {clickedPhotoProductions === "true" ? (
        <div className='productions-section-container'>
          <PhotoProductions />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Productions;
