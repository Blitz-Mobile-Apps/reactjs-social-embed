import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Youtube, Twitter, Instagram, Facebook, Vimeo } from 'reactjs-social-embed'

export default class App extends Component {
  render () {
    return (
      <div className={'container'}>
          <div className={'jumbotron text-center'}>
              <h1>ReactJS Social Embed</h1>
              <p>Reactjs social embed provide faster and easy wrapper to embed platform like youtube, twitter, instagram, vimeo and so much more</p>
          </div>

          <div className='social-embeds mb-5'>
            <div className='row'>
              <div className='col-6'>
                <Card>
                  <Card.Header>
                    <h3 className="text-center">Youtube</h3> 
                    <pre>
                    &lt;Youtube{'\n'} parentClass="parent-container"{'\n'} iframeClass="video-container"{'\n'} id="nN6VR92V70M"{'\n'}
                    /&gt;</pre>
                  </Card.Header>
                  <Card.Body>
                    <Youtube 
                        width="100%"
                        parentClass="parent-container" 
                        iframeClass="video-container" 
                        id="nN6VR92V70M" 
                      />                    
                  </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                      <h3 className="text-center">Instagram</h3> 
                      <pre>
                      &lt;Instagram{'\n'} parentClass="parent-container"{'\n'} url="https://www.instagram.com/p/B6tyOVxAxrk/"{'\n'}
                      /&gt;</pre>
                    </Card.Header>
                    <Card.Body>
                      <Instagram url="https://www.instagram.com/p/B6tyOVxAxrk/" />
                    </Card.Body>
                  </Card>
                <Card>
                  <Card.Header>
                  <h3 className="text-center">Facebook Post</h3> 
                  <pre>
                  &lt;Facebook{'\n'}
                    type="post"{'\n'}
                    url="https://www.facebook.com/mangobaaz/posts/1662350923927272"{'\n'}
                    show_text="true"{'\n'}
                  /&gt;</pre>
                  </Card.Header>
                  <Card.Body>
                    <Facebook
                    type="post"
                    width="100%"
                    height="680px"
                    show_text={true}
                    url="https://www.facebook.com/mangobaaz/posts/1662350923927272" />
                  </Card.Body>
                </Card>

              </div>
              <div className='col-6'>
                <Card>
                  <Card.Header>
                  <h3 className="text-center">Twitter</h3> 
                  <pre>
                  &lt;Twitter{'\n'}
                    id="1242725909485867008"{'\n'}
                  /&gt;</pre>
                  </Card.Header>
                  <Card.Body>
                    <Twitter id="1242725909485867008" />
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                  <h3 className="text-center">Facebook Video</h3> 
                  <pre>
                  &lt;Facebook{'\n'}
                    type="video"{'\n'}
                    url="https://www.facebook.com/saman.abbas/videos/10157225567114503"{'\n'}
                    show_text="true"{'\n'}
                  /&gt;</pre>
                  </Card.Header>
                  <Card.Body>
                    <Facebook
                    type="video"
                    width="100%"
                    show_text={true}
                    url="https://www.facebook.com/saman.abbas/videos/10157225567114503/" />
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                  <h3 className="text-center">Vimeo</h3> 
                  <pre>
                  &lt;Vimeo{'\n'}
                    id="378108134"{'\n'}
                  /&gt;</pre>
                  </Card.Header>
                  <Card.Body>
                    <Vimeo
                    width="100%"
                    id="378108134" />
                  </Card.Body>
                </Card>
              </div>

            </div>
          </div>
      </div>
    )
  }
}
