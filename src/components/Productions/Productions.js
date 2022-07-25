import { useState } from "react";
import Banner from "../Banner/Banner";
import VideoProductions from "../../VideoProductions/VideoProductions";
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
        <button onClick={handleVideo} className='container-buttons-btn-gradient'>
          Videos
        </button>
        <button onClick={handlePhoto} className='container-buttons-btn-gradient'>
          Phothos
        </button>
      </div>
      {clickedVideoProductions === "true" ? (
        <div className='video-section-container'>
          <VideoProductions />
        </div>
      ) : (
        ""
      )}
      {clickedPhotoProductions === "true" ? <PhotoProductions /> : ""}
    </>
  );
}

export default Productions;
