import { useContext, useState } from "react";
import { dataContext } from "../components/context/DataContext";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

import "./VideoProductions.css";

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

  return videosProductions.map((videos) => {
    return (
      <ul className='video-list-container' key={videos.id}>
        <li className='video-list-item'>
          <img src={videos.img} />
          <div className='video-list-item-info' onClick={openModal}>
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
                          <BiLoaderAlt className='modal__spinner-style' fadeIn='none' />
                        </div>
                      ) : null}
                      <iframe
                        className='modal__video-style'
                        onLoad={spinner}
                        loading='lazy'
                        width='800'
                        height='500'
                        src={videos.videoUrl}
                        title='YouTube video player'
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
