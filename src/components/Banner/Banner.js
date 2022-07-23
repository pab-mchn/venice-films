import veniceLogoPink from "../../img/veniceLogoPink.png";
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
      <div className='container'>
        <img className='banner-container-img' src={veniceLogoPink} />
      </div>
    </div>
  );
}

export default Banner;
