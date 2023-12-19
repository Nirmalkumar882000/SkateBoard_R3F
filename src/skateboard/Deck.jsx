

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Deck(props) {
  const { nodes, materials } = useGLTF('/model/board.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Skate_Deck_RAW_004_ONEMAT_001__Bahman-Texture_jpg_0'].geometry} material={nodes['Skate_Deck_RAW_004_ONEMAT_001__Bahman-Texture_jpg_0'].material} rotation={[-Math.PI / 2, 0, 0]} scale={1.428} />
    </group>
  )
}

useGLTF.preload('/model/board.glb')
