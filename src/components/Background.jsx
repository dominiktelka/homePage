import {Environment, Sphere, Stars} from "@react-three/drei";
import {Gradient, LayerMaterial} from "lamina";
import * as THREE from "three"
import React from "react";


export const Background = () =>{

    return <>
    <Environment preset="warehouse" />
        <Sphere scale={[500,500,500]} rotation-y={Math.PI/2} >
            <LayerMaterial
            lighting="physical"
            transmission={1}
            side={THREE.BackSide}
            >
                <Gradient colorA={"black"} colorB={"blue"} axes={"y"} start={0} end={-3}/>

            </LayerMaterial>
        </Sphere>
        <Stars radius={50} depth={100} count={5000} factor={2} saturation={0} fade speed={1} />
    </>
}