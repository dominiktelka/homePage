import { Canvas } from "@react-three/fiber";

import {ScrollControls} from "@react-three/drei";
import {Experience} from "./Experience.jsx";



export const Scene = () => {

    return (
        <>
            <Canvas >
                <color attach="background" args={["#ececec"]} />
                <ScrollControls pages={50}
                                damping={1}
                                style={{
                                    top: "10px",
                                    left: "0px",
                                    bottom: "10px",
                                    right: "10px",
                                    width: "auto",
                                    height: "auto",
                                    animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
                                    opacity: 0,
                                }}>
                    <Experience />
                </ScrollControls>
            </Canvas>
        </>
    );
}
