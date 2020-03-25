import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Facebook = ({ type, url, width, height, show_text, parentClass, iframeClass }) => {
    const fbUrl = encodeURIComponent(url);    
    const iframeBase = (type === 'post') ? 'https://www.facebook.com/plugins/post.php?href=' : 'https://www.facebook.com/plugins/video.php?href=';
    const iframeSrc = `${iframeBase}${url}'&width=500${(show_text) ? '&show_text=1': ''}`;
    console.log('ififrameSrc', iframeSrc);
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
            allowTransparency="true" 
            allow="encrypted-media"
            allowFullScreen
            scrolling="no" 
            src={iframeSrc}
          ></iframe>
      </div>        
    </Fragment>
  );
}

Facebook.propTypes = {
    type: PropTypes.string,
    url: PropTypes.string ,
    show_text: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    parentClass: PropTypes.string,
    iframeClass: PropTypes.string,
};

Facebook.defaultProps = {
    type: 'post', 
    show_text: true, 
    url: "", 
    width: "640",
    height: "640",
    parentClass: "",
    iframeClass: "",
};
  

export default Facebook;