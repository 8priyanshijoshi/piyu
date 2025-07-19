import React, { useRef } from 'react'
import MyVideo from '../../video/MyVideo.mp4'
const VideoRef = () => {
    const UrlRef = useRef(null)

    const videoplay = () => {
        UrlRef.current.play()
    }

    const videopause = () => {
        UrlRef.current.pause()
    }
  return (
    <>
        <button onClick={videoplay}>Play</button>
        <button onClick={videopause}>Pause</button>
        <br />
        <video ref={UrlRef}>
            <source src={MyVideo}/>
        </video>
    </>
  )
}

export default VideoRef
