import "./Home.css";
import veniceLogoPink from "../../img/veniceLogoPink.png";
import VideoProductionsModal from "../VideoProductionsModal/VideoProductionsModal";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className='home'>
        <div className='container'>
          <img className='container-img' src={veniceLogoPink} />
        </div>
        <Link className='btn btn-gradient' to={"/productions"}>
          Start Now
        </Link>
      </div>
      <VideoProductionsModal />
    </>
  );
}

export default Home;
