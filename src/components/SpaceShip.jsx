
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const SpaceShip = React.forwardRef((props, ref) =>{
  const { nodes, materials } = useGLTF('models/spaceShip/spaceShip.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.MAIN} />
    </group>
  )
})

useGLTF.preload('models/spaceShip/spaceShip.glb')
export default SpaceShip;