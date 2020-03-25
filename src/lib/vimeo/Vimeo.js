import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Vimeo = ({ id, width, height, autoPlay, parentClass, iframeClass }) => {
    const vimeoId = encodeURIComponent(id);    
    const iframeSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=${(autoPlay) ? '1': '0'}`;

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
            allowFullScreen
            src={iframeSrc}
          ></iframe>
      </div>        
    </Fragment>
  );
}

Vimeo.propTypes = {
    id: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    autoPlay: PropTypes.bool,
    parentClass: PropTypes.string,
    iframeClass: PropTypes.string,
};

Vimeo.defaultProps = {
    id: "",
    autoPlay: false,
    width: "640",
    height: "360",
    parentClass: "",
    iframeClass: "",
};
  

export default Vimeo;