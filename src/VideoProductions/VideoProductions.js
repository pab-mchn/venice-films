import { useContext } from "react";
import { dataContext } from "../components/context/DataContext";

import "./VideoProductions.css";

const VideoProductions = () => {
  const { videosProductions } = useContext(dataContext);
  return videosProductions.map((videos) => {
    return (
      <ul className='video-list-container' key={videos.id}>
        <li className='video-list-item'>
          <img src={videos.img} />
          <div className='video-list-item-info'>
            <h3>{videos.name} </h3>
            <h6>{videos.description}</h6>
          </div>
        </li>
      </ul>
    );
  });
};

export default VideoProductions;
