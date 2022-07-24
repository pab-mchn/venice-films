import { useContext } from "react";
import { dataContext } from "../components/context/DataContext";

import { Link } from "react-router-dom";

const imageStyle = {
  width: "240px",
  height: "240px",
};
const VideoProductions = () => {
  const { monsteraCategory } = useContext(dataContext);

  return monsteraCategory.map((plants) => {
    return (
      <div className='plantsCard' key={plants.id}>
        <Link to={`/${plants.id}`}>
          <img style={imageStyle} src={plants.image} alt='Monstera Picture' />
          <h5>{plants.name}</h5>
        </Link>
      </div>
    );
  });
};

export default VideoProductions;
