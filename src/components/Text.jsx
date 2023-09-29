import {Text} from "@react-three/drei";

import React from "react";


import {fadeOnBeforeCompileFlat} from "../utils/fadeMaterial.js";


export const TextSpace = ({CURVE_DISTANCE, }) => {



    const textNormal = <>
        <group position={[2.6*CURVE_DISTANCE,0.08*CURVE_DISTANCE,1.02*CURVE_DISTANCE]} rotation={[0, 1.3, 0]}>
            <Text  anchorX="right" anchorY="middle" fontSize={1.2} maxWidtk={2.5} textAlign={"center"} font={"/font/jedi.ttf"}>
                My Tech Skills{"\n"}
                <meshStandardMaterial color="yellow" onBeforeCompile={fadeOnBeforeCompileFlat}/>
            </Text>
        </group>

    </>


    const textMobile = <>
        <group position={[2.6*CURVE_DISTANCE,0.15*CURVE_DISTANCE,0.93*CURVE_DISTANCE]} rotation={[0, 1.3, 0]}>
            <Text anchorX="right" anchorY="middle" fontSize={1.2} maxWidtk={2.5} textAlign={"center"} font={"/font/jedi.ttf"}>
                My Tech Skills{"\n"}
                <meshStandardMaterial color="yellow" onBeforeCompile={fadeOnBeforeCompileFlat}/>
            </Text>
        </group>
    </>

    return window.innerWidth > window.innerHeight ? textNormal : textMobile

};


