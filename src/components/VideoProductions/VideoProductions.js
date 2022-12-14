import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import { IoCloseOutline } from "react-icons/io5";
import Loader from "../Loader/Loader";

import "../Productions/Productions.css";

const VideoProductions = () => {
  const { videosProductions } = useContext(dataContext);
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  if (!videosProductions.length) return <Loader />;

  return videosProductions.map((videos) => {
    return (
      <ul className='productions-list-container' key={videos.id}>
        <li className='productions-list-item'>
          <img src={videos.img} />
          <div className='productions-list-item-info' onClick={openModal}>
            <h3>{videos.name} </h3>
            <h6>{videos.description}</h6>
            {modal ? (
              <section className='modal__bg'>
                <div className='modal__align'>
                  <div className='modal__content' modal={modal}>
                    <IoCloseOutline className='modal__close' arial-label='Close modal' onClick={setModal} />
                    <div className='modal__video-align'>
                      {videoLoading ? (
                        <div className='modal__spinner'>
                          <Loader />
                        </div>
                      ) : null}
                      <iframe
                        className='modal__video-style'
                        onLoad={spinner}
                        loading='lazy'
                        width='900'
                        height='600'
                        src={videos.videoUrl}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen></iframe>
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

export default VideoProductions;
