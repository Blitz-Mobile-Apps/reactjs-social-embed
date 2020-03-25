import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

var callbacks = [];

const addScript = (src, cb) => {
    if (callbacks.length === 0) {
      callbacks.push(cb)
      var s = document.createElement('script')
      s.setAttribute('src', src)
      s.onload = () => callbacks.forEach((cb) => cb())
      document.body.appendChild(s)
    } else {
      callbacks.push(cb)
    }
}
  


const Twitter = ({ id, parentClass }) => {
    const videoId = encodeURIComponent(id);    
    const tweetRef = useRef();

    const renderTweet = () => {
        const { current } = tweetRef;
        window.twttr.widgets.createTweetEmbed(videoId, current)
    }

    useEffect(() => {
        if (!window.twttr) {
            addScript('https://platform.twitter.com/widgets.js', renderTweet)
        } else {
            renderTweet()
        }
    
    });

    return (
    <Fragment>
      <div className={`${parentClass}`} ref={tweetRef}></div>        
    </Fragment>
  );
}

Twitter.propTypes = {
    id: PropTypes.string,
    parentClass: PropTypes.string
};

Twitter.defaultProps = {
    id: "",
    parentClass: "",
};
  

export default Twitter;