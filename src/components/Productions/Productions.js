import Banner from "../Banner/Banner";
import "./Productions.css";
import { Link } from "react-router-dom";

function Productions() {
  return (
    <>
      <Banner />
      <div className='container-buttons'>
        <a className='container-buttons-btn-gradient'>Phothos</a>
        <a className='container-buttons-btn-gradient'>Videos</a>
      </div>
    </>
  );
}

export default Productions;
