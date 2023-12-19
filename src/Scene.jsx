import { CameraControls, Environment, Html } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import Top from './HTML/Top'
import SectionHeadline from './HTML/SectionHeadline'

import {wheelsInfo,trucksInfo,deckInfo} from "./info.js";


function Scene({canvasContainerRef}) {

    // UseRef

    const topHtmlGroupRef=useRef()
    const bottomControlsRef=useRef()
    const cameraControlsRef=useRef()
    const trucksGroupContainerRef=useRef()



    // UseState

    const [headlineText,setHeadlineText]=useState("Choose Your Board")




  return (
  <>
  <Environment files="warehouse.hdr"/>
  <CameraControls
        ref={cameraControlsRef}
        onChange={(e) => {
        //   bottomGroupHtmlRef.current.position.setX(e.target.camera.position.x);
          topHtmlGroupRef.current.position.setX(e.target.camera.position.x);
        }}
      />


      {/* 1 Top Control */}
  
  <group ref={topHtmlGroupRef} position-y={0.588}>
    <Html center>
        <Top/>
    </Html>
    <group position-y={-0.1} name='section-headline-group'>

        <Html center wrapperClass='section-headline-container'>
            <SectionHeadline headlineText={headlineText}/>    
        </Html>
    </group>

    <group ref={trucksGroupContainerRef} name='trucks-container'>

    </group>

  </group>



{/* 2 middle control */}


  <group>

  </group>


  {/* 3 bottom Control */}

  <group>

  </group>

  </>
  )
}

export default Scene
