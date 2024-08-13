import React from 'react';
import ReactPlayer from 'react-player'


const VideoPlayerMy = () => {
  return (
    <>
    <ReactPlayer
            className=''
            url= 'https://youtu.be/o17MF9vnabg?si=BDh-N9RiZWlf7Kir'
            width='100%'
            height='100%'
            controls = {true}

            />
    </>
  )
}

export default VideoPlayerMy