import veniceLogoWhite from "../../img/veniceLogoWhite.png";
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
      <div className='container'>
        <img className='banner-container-img' src={veniceLogoWhite} />
      </div>
    </div>
  );
}

export default Banner;
