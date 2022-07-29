import "./Home.css";
import veniceLogoPink from "../../img/veniceLogoPink.png";
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
    </>
  );
}

export default Home;
