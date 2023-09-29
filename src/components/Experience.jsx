import {
    Float,
    PerspectiveCamera,
} from "@react-three/drei";
import {Background} from "./Background.jsx";
import {Xwing} from "./Xwing.jsx";
import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useFrame} from "@react-three/fiber";
import {Galaxy} from "./Galaxy.jsx";
import {Group} from "three";
import {TextSpace} from "./Text.jsx";
import {usePlay} from "../contexts/Play.jsx";
import {gsap} from "gsap";
import {Speed} from "./Speed.jsx";
import {ImageSpace} from "./Images.jsx";
import SpaceShip from "./SpaceShip.jsx";
import spaceShip from "./SpaceShip.jsx";




const LINE_NB_POINTS = 1000
const CURVE_DISTANCE = 150;
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_XWING = 0.02;
const XWING_MAX_ANGLE = 35;



export const Experience = ({...scrollPercentage}) => {
    const { playGame,end,} = usePlay();

    const curve = useMemo(()=>{
        return  new THREE.CatmullRomCurve3([
                new THREE.Vector3(3*CURVE_DISTANCE,0, CURVE_DISTANCE),
                new THREE.Vector3(-0.5*CURVE_DISTANCE,0,-0.15 *CURVE_DISTANCE),
                new THREE.Vector3(-0.2*CURVE_DISTANCE,-0.4*CURVE_DISTANCE,-2*CURVE_DISTANCE),
                new THREE.Vector3(0.6*CURVE_DISTANCE,-0.3*CURVE_DISTANCE,-3.3*CURVE_DISTANCE),
                new THREE.Vector3(0.55*CURVE_DISTANCE,-0.1*CURVE_DISTANCE,-4*CURVE_DISTANCE),
                new THREE.Vector3(0.1*CURVE_DISTANCE,-0.2*CURVE_DISTANCE,-4.8*CURVE_DISTANCE),
                new THREE.Vector3(-1.4*CURVE_DISTANCE,0.3*CURVE_DISTANCE,-6.5*CURVE_DISTANCE),
                new THREE.Vector3(1.1*CURVE_DISTANCE,-0.4*CURVE_DISTANCE,-6.5*CURVE_DISTANCE),
                new THREE.Vector3(1.1*CURVE_DISTANCE,0.4*CURVE_DISTANCE,-8*CURVE_DISTANCE),
                new THREE.Vector3(-0.1*CURVE_DISTANCE,0.7*CURVE_DISTANCE,-9*CURVE_DISTANCE),
                new THREE.Vector3(1.2*CURVE_DISTANCE,-0.05*CURVE_DISTANCE,-9.9*CURVE_DISTANCE),

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
    const cameraRef = useRef()
    const lastScroll = useRef(0)
    const { setHasScroll, setEnd}= usePlay();
    const cameraRail = useRef()
    const prevScrollPercentageRef = useRef(0);
    scrollPercentage = scrollPercentage.scrollPercentage

    useFrame((_state, delta) => {
        // console.log(cameraGroup.current.position.z)

        if(window.innerWidth > window.innerHeight){
            cameraRef.current.fov = 30;
            cameraRef.current.position.z = 10
        }else{
            cameraRef.current.position.z = 5;
            cameraRef.current.fov = 80;
        }

        if(lastScroll.current <=0 && scrollPercentage.scrollPercentage > 0){
            setHasScroll(true);
        }



        const scrollOffset = Math.max(0, scrollPercentage.scrollPercentage-0.005);


        const curPoint = curve.getPoint(scrollOffset);


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

        // Xwing rotation

        const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_XWING );

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


        // LIMIT XWING ANGLE
        if (angleDegrees < 0) {
            angleDegrees = Math.max(angleDegrees, -XWING_MAX_ANGLE);
        }
        if (angleDegrees > 0) {
            angleDegrees = Math.min(angleDegrees, XWING_MAX_ANGLE);
        }

        // SET BACK XWING
        angle = (angleDegrees * Math.PI) / 180;

        const targetXwingQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                xWing.current.rotation.x,
                xWing.current.rotation.y,
                angle
            )
        );
        xWing.current.quaternion.slerp(targetXwingQuaternion, delta * 2)


    });
    const xWingOutTl = useRef();
    const xWing = useRef()
    const xWingInTl = useRef()

    useLayoutEffect(() => {
        xWingInTl.current = gsap.timeline();
        xWingInTl.current.pause();
        xWingInTl.current.from(xWing.current.position, {
            duration: 3,
            z: 20,
            y: -2,
        });

        xWingOutTl.current = gsap.timeline();
        xWingOutTl.current.pause();

        xWingOutTl.current.to(
            xWing.current.position,
            {
                duration: 4.5,
                z: -250,
                y: 10,
            },
            0
        );
        xWingOutTl.current.to(xWing.current.position, {
            duration: 1,
            z: -3000,
        });
    }, []);


    useEffect(() => {
        if (playGame) {
            xWingInTl.current.play();
        }

    }, [playGame]);

    useEffect(()=>{
        if(end){
            xWingOutTl.current.play();
        }
    },[end])


    const shipRef = useRef()


    return useMemo(()=>(
        <>
            <group ref={cameraGroup}>
                {/*<OrbitControls/>*/}
                <Speed />
                <Background/>
                <group ref={cameraRail}>
                    <PerspectiveCamera ref={cameraRef} position={[0,0,10]} fov={50} makeDefault={true}/>
                </group>
                <group ref={xWing}>
                    <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.1}>
                        <Xwing  rotation-y={Math.PI/-2} scale={1} position={[0,-1,0]}/>
                    </Float>

                </group>
            </group>
            <TextSpace CURVE_DISTANCE={CURVE_DISTANCE} xWing={xWingOutTl}/>
            <ImageSpace CURVE_DISTANCE={CURVE_DISTANCE}/>
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
                    <meshStandardMaterial  color={"red"}  transparent={1}  />
                </mesh>
            </group>
            <Float floatIntensity={0.1} speed={1} rotationIntensity={0.22}>
                <SpaceShip scale={0.05} ref={shipRef} position={[150, 15, -10 * CURVE_DISTANCE]}/>
            </Float>
            <Galaxy position={[-2, 0, -5 *CURVE_DISTANCE]} scale={CURVE_DISTANCE}/>
        </>
    ),[]
    );
};

