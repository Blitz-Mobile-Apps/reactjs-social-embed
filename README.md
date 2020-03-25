# ReactJS Social Embed


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Reactjs social embed provide faster and easy wrapper to embed platform like youtube, twitter, instagram, vimeo and facebook.
    It Provides support for 
  - Youtube Video Embed
  - Vimeo Video Embed
  - Facebook posts and video Embed
  - Instagram Post emvbed
  - Twitter tweet emved

### Installation

```sh
$ npm install --save reactjs-social-embed
```

### Usage
#### 1) Youtube
```sh
import { Youtube } from 'reactjs-social-embed'
<Youtube width="100%" parentClass="p-container" iframeClass="v-container" id="w5GrxfjuTTI" /> 
```
| Porps | Type |
| ------ | ------ |
| id 	| string // youtube video id|
| width 	| string // custom width of iframe|
| height 	| string // custom width of iframe|
| isPlaylist 	| bool // if video is in playlist|
| autoPlay 	| bool |
| parentClass 	| string |
| iframeClass 	| string |


#### 2) Instagram
```sh
import { Instagram } from 'reactjs-social-embed'
<Instagram url="https://www.instagram.com/p/B8zB3rclo1H/" />	
```
| Porps | Type |
| ------ | ------ |
| url 	| string // insta video id|
| width 	| string // custom width of iframe|
| height 	| string // custom width of iframe|
| hideCaption 	| bool // if you want to hide caption|
| autoPlay 	| bool |
| parentClass 	| string |


#### 3) Facebook (post & Video)
```sh
import { Facebook } from 'reactjs-social-embed'
<Facebook type="post" width="100%" height="680px" show_text={true} 
url="https://www.facebook.com/postmalone/posts/1992925354174335" />
<Facebook type="video" width="100%" height="680px" show_text={true} 
url="https://www.facebook.com/postmalone/videos/908295402959230/" />

```
| Porps | Type |
| ------ | ------ |
| type 	| string // wether it is post or video|
| url 	| string // url|
| width 	| string // custom width of iframe|
| height 	| string // custom width of iframe|
| show_text 	| bool // want to show caption|
| parentClass 	| string |
| iframeClass 	| string |


#### 4) Twitter
```sh
import { Twitter } from 'reactjs-social-embed'
<Twitter id="1169826984433606656" />
```
| Porps | Type |
| ------ | ------ |
| id 	| string // tweet id|
| parentClass 	| string |



#### 5) Vimeo
```sh
import { Vimeo } from 'reactjs-social-embed'
<Vimeo width="100%" id="378108134" />
```
| Porps | Type |
| ------ | ------ |
| id 	| string // vimeo video id|
| width 	| string // vimeo width of iframe|
| parentClass 	| string |




## Contributing

> This is an early phase, We are eagerly looking for contributions from the community.
> To get started:
### Step 1

- Option 1 )🍴 Fork this repo!
- Option 2) - 👯 Clone this repo to your local machine using `https://github.com/Blitz-Mobile-Apps/reactjs-social-embed`
### Step 2
- **HACK AWAY!** 🔨🔨🔨
### Step 3
- 🔃 Create a new pull request.
---
## Support
Reach out to us at our `Website`: <a href="https://blitzmobileapps.com" target="_blank">`Blitz Mobile Apps`</a>
## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
- **[MIT license](http://opensource.org/licenses/mit-license.php)**
