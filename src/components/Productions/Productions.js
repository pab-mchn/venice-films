import Banner from "../Banner/Banner";
import "./Productions.css";
import VideoProductions from "../../VideoProductions/VideoProductions";

function Productions() {
  return (
    <>
      <Banner />
      <div className='container-buttons'>
        <a className='container-buttons-btn-gradient'>Phothos</a>
        <a className='container-buttons-btn-gradient'>Videos</a>
      </div>
      <div className='video-section-container'>
        <VideoProductions />
      </div>
    </>
  );
}

export default Productions;
