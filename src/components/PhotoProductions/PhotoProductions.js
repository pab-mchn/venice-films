import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

import "../Productions/Productions.css";

const PhotoProductions = () => {
  const { photoProductions, photoProductionsResults } = useContext(dataContext);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return photoProductions.map((photos) => {
    return (
      <ul className='productions-list-container' key={photos.id}>
        <li className='productions-list-item'>
          <img src={photos.img} />
          <div className='productions-list-item-info' onClick={openModal}>
            <h3>{photos.name} </h3>
            <h6>{photos.description}</h6>
            {modal ? (
              <section className='modal__bg'>
                <div className='modal__align'>
                  <div className='modal__content' modal={modal}>
                    <IoCloseOutline className='modal__close' arial-label='Close modal' onClick={setModal} />
                    <div className='modal__photo-align'>
                      {photos.imageResults.map((headers) => {
                        return <img src={headers} />;
                      })}
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </li>
      </ul>
    );
  });
};

export default PhotoProductions;
