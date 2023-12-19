

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Trucks(props) {
  const { nodes, materials } = useGLTF('/model/trucks.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.FrontTruck_SkateBoardSub_0.geometry} material={materials.SkateBoardSub} position={[0, -0.319, 0.055]} rotation={[-3.1, -0.007, 3.141]} scale={0.015} />
      <mesh geometry={nodes.RearTruck_SkateBoardSub_0.geometry} material={materials.SkateBoardSub} position={[0, 0.308, 0.054]} rotation={[3.108, -0.01, -3.141]} scale={0.015} />
    </group>
  )
}

useGLTF.preload('/model/trucks.glb')
