import React from "react";
import * as THREE from 'three'
import { Image as ImageImpl } from '@react-three/drei'

export const ImageSpace = ({CURVE_DISTANCE}) => {

    function Image({ c = new THREE.Color(), ...props }) {

        return <ImageImpl {...props} />
    }
    function Images() {
        return (
            <group >
                <Image position={[2.6*CURVE_DISTANCE,0.05*CURVE_DISTANCE,1.055*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/react.svg" scale={[4,4,4]} transparent />
                <Image position={[2.6*CURVE_DISTANCE,0.025*CURVE_DISTANCE,1.055*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/js.svg" scale={[4,4,4]} transparent/>
                <Image position={[2.6*CURVE_DISTANCE,-0.001*CURVE_DISTANCE,1.055*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/css.svg" scale={[4,4,4]} transparent/>
                <Image position={[2.6*CURVE_DISTANCE,-0.03*CURVE_DISTANCE,1.055*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/node.svg" scale={[4,4,4]} transparent/>
                <Image position={[2.6*CURVE_DISTANCE,-0.058*CURVE_DISTANCE,1.055*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/typescript.svg" scale={[4,4,4]} transparent/>
            </group>
        )
    }
    function Images2() {
        return (
            <group >
                <Image position={[2.6*CURVE_DISTANCE,0.12*CURVE_DISTANCE,0.965*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/react.svg" scale={[4,4,4]} transparent />
                <Image position={[2.6*CURVE_DISTANCE,0.09*CURVE_DISTANCE,0.965*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/js.svg" scale={[4,4,4]} transparent/>
                <Image position={[2.6*CURVE_DISTANCE,0.06*CURVE_DISTANCE,0.965*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/css.svg" scale={[4,4,4]} transparent/>
                <Image position={[2.6*CURVE_DISTANCE,0.03*CURVE_DISTANCE,0.965*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/node.svg" scale={[4,4,4]} transparent/>
                <Image position={[2.6*CURVE_DISTANCE,0.001*CURVE_DISTANCE,0.965*CURVE_DISTANCE]} rotation={[0,1.3,0]} url="./icons/typescript.svg" scale={[4,4,4]} transparent/>
            </group>
        )
    }


    const textNormal = <>
            <Images />
    </>


    const textMobile = <>
        <Images2/>
    </>

    return window.innerWidth > window.innerHeight ? textNormal : textMobile

};