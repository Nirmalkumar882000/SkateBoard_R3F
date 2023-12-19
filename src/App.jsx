import React, { useRef } from 'react'
import Top from './HTML/Top'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

function App() {

  const canvasContainerRef=useRef()
  return (
   <div  id="canvas-container"
   className="w-screen h-[100svh] fixed touch-none max-w-[2000px] left-[50%] translate-x-[-50%]">
    <Canvas camera={{
      fov:15
    }}>
      <Scene canvasContainerRef={canvasContainerRef} />
    </Canvas>
   </div>
  )
}

export default App
