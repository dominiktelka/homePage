import {Float, PerspectiveCamera, useScroll, Text, OrbitControls} from "@react-three/drei";
import {Background} from "./Background.jsx";
import {Xwing} from "./Xwing.jsx";
import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useFrame} from "@react-three/fiber";
import {Galaxy} from "./Galaxy.jsx";
import {Group} from "three";


const LINE_NB_POINTS = 1000
const CURVE_DISTANCE = 150;
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_XWING = 0.02;
const XWING_MAX_ANGLE = 35;

export const Experience = () => {

    const curve = useMemo(()=>{
        return  new THREE.CatmullRomCurve3([
                new THREE.Vector3(3*CURVE_DISTANCE,0,CURVE_DISTANCE),
                new THREE.Vector3(-0.5*CURVE_DISTANCE,0,-0.15 *CURVE_DISTANCE),
                new THREE.Vector3(-0.2*CURVE_DISTANCE,-0.4*CURVE_DISTANCE,-2*CURVE_DISTANCE),
                new THREE.Vector3(0.6*CURVE_DISTANCE,-0.3*CURVE_DISTANCE,-3.3*CURVE_DISTANCE),
                new THREE.Vector3(0.55*CURVE_DISTANCE,-0.1*CURVE_DISTANCE,-4*CURVE_DISTANCE),

                new THREE.Vector3(0.1*CURVE_DISTANCE,-0.2*CURVE_DISTANCE,-4.8*CURVE_DISTANCE),
                new THREE.Vector3(-1.4*CURVE_DISTANCE,0.3*CURVE_DISTANCE,-6.5*CURVE_DISTANCE),
                new THREE.Vector3(1.1*CURVE_DISTANCE,-0.4*CURVE_DISTANCE,-6.5*CURVE_DISTANCE),
                new THREE.Vector3(1.1*CURVE_DISTANCE,0.4*CURVE_DISTANCE,-8*CURVE_DISTANCE),
                new THREE.Vector3(-0.1*CURVE_DISTANCE,0.75*CURVE_DISTANCE,-9*CURVE_DISTANCE),
                new THREE.Vector3(1.4*CURVE_DISTANCE,-0.1*CURVE_DISTANCE,-10*CURVE_DISTANCE),

            ],
            false,
            "catmullrom",
            0.5)
    }, [])
    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, -0.008);
        shape.lineTo(0, 0.008);

        return shape;
    }, [curve]);

    const cameraGroup = useRef();
    const scroll = useScroll();

    useFrame((_state, delta) => {
        const scrollOffset = Math.max(0, scroll.offset);

        const curPoint = curve.getPoint(scrollOffset);

        // Follow the curve points
        cameraGroup.current.position.lerp(curPoint, delta * 24);

        // Make the group look ahead on the curve

        const lookAtPoint = curve.getPoint(
            Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
        );

        const currentLookAt = cameraGroup.current.getWorldDirection(
            new THREE.Vector3()
        );
        const targetLookAt = new THREE.Vector3()
            .subVectors(curPoint, lookAtPoint)
            .normalize();

        const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
        cameraGroup.current.lookAt(
            cameraGroup.current.position.clone().add(lookAt)
        );

        // Airplane rotation

        const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_XWING);

        const nonLerpLookAt = new Group();
        nonLerpLookAt.position.copy(curPoint);
        nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

        tangent.applyAxisAngle(
            new THREE.Vector3(0, 1, 0),
            -nonLerpLookAt.rotation.y
        );

        let angle = Math.atan2(-tangent.z, tangent.x);
        angle = -Math.PI / 2 + angle;

        let angleDegrees = (angle * 180) / Math.PI;
        angleDegrees *= 2.4; // stronger angle

        // LIMIT PLANE ANGLE
        if (angleDegrees < 0) {
            angleDegrees = Math.max(angleDegrees, -XWING_MAX_ANGLE);
        }
        if (angleDegrees > 0) {
            angleDegrees = Math.min(angleDegrees, XWING_MAX_ANGLE);
        }

        // SET BACK ANGLE
        angle = (angleDegrees * Math.PI) / 180;

        const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                xWing.current.rotation.x,
                xWing.current.rotation.y,
                angle
            )
        );
        xWing.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    });

    const xWing = useRef()
    return (
        <>
            {/*<OrbitControls />*/}
            <group ref={cameraGroup}>
                <Background/>
                <PerspectiveCamera position={[0,0,10]} fov={30} makeDefault={true}/>
                <group ref={xWing}>
                    <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.1}>
                        <Xwing rotation-y={Math.PI/-2} scale={1} position={[0,-1,0]}/>
                    </Float>
                </group>
            </group>
            <group position={[-2.5,1.5,-5*CURVE_DISTANCE]}>
                <Text color="whiteSmoke" anchorX="right" anchorY="middle" fontSize={0.22} maxWidtk={2.5}>
                    Hi! I'm Dominik Telka!{"\n"}
                    Frontend Developer {"\n"}
                    Who loves to play with 3D
                </Text>
            </group>
            <group position={[-10,0,-30]} rotation={[0, 1, 0]}>
                <Text color="whiteSmoke" anchorX="right" anchorY="middle" fontSize={0.22} maxWidtk={2.5}>
                    I started my journey{"\n"}
                    2 years ago{"\n"}
                    From this time i learned a lot!
                </Text>
            </group>
            <group position={[0,-2,0]}>
                <mesh>
                    <extrudeGeometry
                        args={[
                            shape,
                            {
                                steps: LINE_NB_POINTS,
                                bevelEnabled:false,
                                extrudePath: curve,
                            }
                        ]}
                    />
                    <meshStandardMaterial color={"red"} opacity={1} transparent={1}  envMapIntensity={2}/>
                </mesh>
            </group>
            <Galaxy position={[-2, 0, -5 *CURVE_DISTANCE]} scale={CURVE_DISTANCE}/>
        </>
    );
};