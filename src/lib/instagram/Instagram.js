import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string'

var callbacks = [];

const Instagram = ({ id, url, hideCaption, width, parentClass }) => {
    const videoId = encodeURIComponent(id);    
    const [instaEmbed, setinstaEmbed] = useState("");
  
    const getQueryParams = ({ url, hideCaption, maxWidth }) => {
        return qs.stringify({
          url,
          hidecaption: hideCaption,
          maxwidth: maxWidth >= 320 ? maxWidth : undefined,
          omitscript: true,
        });
    }
   

    const addScript = (src, id, cb) => {
        if (callbacks.length === 0) {
          callbacks.push(cb)
          var s = document.createElement('script')
          s.setAttribute('src', src)
          s.setAttribute('id', id)
          s.async = s.defer = true
          s.onload = () => callbacks.forEach((cb) => cb())
          document.body.appendChild(s)
        } else {
          callbacks.push(cb)
        }
    }
      
    const fetchEmbed = (params) => {
        fetch(`https://api.instagram.com/oembed/?${params}`)
        .then(res => res.json())
        .then(
          (result) => {
            setinstaEmbed(result.html)
          },
          (error) => {
            console.throw(erorr);
          }
        )
    }

    const renderInsta = () => {
        fetchEmbed(getQueryParams({ url, hideCaption, width }))

    }

    useEffect(() => {
        if(instaEmbed){
            window.instgrm.Embeds.process();     
        }

        if (window.instgrm || document.getElementById('react-instagram-embed-script')) {
            fetchEmbed(getQueryParams({ url, hideCaption, width }));
        }
        else 
        {
            addScript('https://platform.instagram.com/en_US/embeds.js', 'react-instagram-embed-script', renderInsta);
        }
    });

    return (
    <Fragment>
      <div className={`${parentClass}`} dangerouslySetInnerHTML={{ __html: instaEmbed }}></div>        
    </Fragment>
  );
}

Instagram.propTypes = {
    url: PropTypes.string,
    hideCaption: PropTypes.bool,
    width: PropTypes.string,
    parentClass: PropTypes.string,
};

Instagram.defaultProps = {
    url: '',
    hideCaption: false,
    width: "500px",
    parentClass: "",
};
  

export default Instagram;