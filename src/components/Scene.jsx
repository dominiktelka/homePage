import { Canvas } from "@react-three/fiber";

import {Experience} from "./Experience.jsx";



export const Scene = (scrollPercentage) => {

    return (
        <>
            <Canvas >
                <color attach="background" args={["#ececec"]} />
                <Experience scrollPercentage={scrollPercentage} />
            </Canvas >
        </>
    );
}
