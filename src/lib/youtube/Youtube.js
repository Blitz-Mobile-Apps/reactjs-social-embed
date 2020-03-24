import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Youtube = ({ id, poster, autoPlay, width, height, parentClass, iframeClass, isPlaylist }) => {
    const videoId = encodeURIComponent(id);    
    const posterUrl = `https://i.ytimg.com/vi/${videoId}/${hqdefault}.jpg`;
    const iframeSrc = !isPlaylist ? `https://www.youtube.com/embed/${videoId}?autoplay=${(autoPlay) ? '1': '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoId}`;

    return (
    <Fragment>
      <div
        className={`${parentClass}`}
        >
          <iframe
            className={iframeClass}
            width={width}
            height={height}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            src={iframeSrc}
          ></iframe>
      </div>        
    </Fragment>
  );
}

Youtube.propTypes = {
    id: PropTypes.string,
    poster: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    isPlaylist: PropTypes.bool,
    autoPlay: PropTypes.bool,
    parentClass: PropTypes.string,
    embedClass: PropTypes.string,
    iframeClass: PropTypes.string,
};

Youtube.defaultProps = {
    id: "",
    autoPlay: false,
    poster: "hqdefault",
    width: "560",
    height: "315",
    isPlaylist: false,
    parentClass: "",
    iframeClass: "",
};
  

export default Youtube;