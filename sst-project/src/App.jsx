import { useState } from 'react'
import Header from './components/Header'
import Webcam from "react-webcam"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isWebcamOn, setIsWebcamOn] = useState(false)

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const toggleWebcam = () => {
    setIsWebcamOn(!isWebcamOn)
  }

  return (
    <div className='App'>
      <Header/>
      <button onClick={toggleWebcam} className='Button-camera'>
        {isWebcamOn ? 'Turn off Webcam' : 'Turn on Webcam'}
      </button>
      {isWebcamOn && <Webcam className="webcam-feed" videoConstraints={videoConstraints} />}
    </div>
  )
}

export default App