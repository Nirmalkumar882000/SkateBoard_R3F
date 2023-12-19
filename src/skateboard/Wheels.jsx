

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Wheels(props) {
  const { nodes, materials } = useGLTF('/model/wheels.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['front-left-wheel'].geometry} material={nodes['front-left-wheel'].material} position={[-8.413, -24.549, -5.341]} />
      <mesh geometry={nodes['front-right-wheel'].geometry} material={nodes['front-right-wheel'].material} position={[8.413, -24.549, -5.341]} />
      <mesh geometry={nodes['rear-left-wheel'].geometry} material={nodes['rear-left-wheel'].material} position={[-8.413, 24.425, -5.335]} />
      <mesh geometry={nodes['rear-right-wheel'].geometry} material={nodes['rear-right-wheel'].material} position={[8.413, 24.425, -5.335]} />
    </group>
  )
}

useGLTF.preload('/model/wheels.glb')
