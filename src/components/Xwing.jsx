import React from 'react';
import { useGLTF } from '@react-three/drei';





export function Xwing(props) {
    const { nodes, materials } = useGLTF('./models/xWing/model.glb');

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat16} />
            <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat5} />
            <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat8} />
            <mesh geometry={nodes['Node-Mesh_3'].geometry} material={materials.mat17} />
            <mesh geometry={nodes['Node-Mesh_4'].geometry} material={materials.mat25} />
            <mesh geometry={nodes['Node-Mesh_5'].geometry} material={materials.mat24} />
            <mesh geometry={nodes['Node-Mesh_6'].geometry} material={materials.mat23} />
            <mesh geometry={nodes['Node-Mesh_7'].geometry} material={materials.mat22} />
            <mesh geometry={nodes['Node-Mesh_8'].geometry} material={materials.mat7} />
        </group>
    )
}

useGLTF.preload('./models/xWing/model.glb')