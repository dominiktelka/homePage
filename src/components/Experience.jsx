import {Float, PerspectiveCamera, useScroll, Text, OrbitControls, PositionalAudio} from "@react-three/drei";
import {Background} from "./Background.jsx";
import {Xwing} from "./Xwing.jsx";
import React, {useEffect, useLayoutEffect, useMemo, useRef} from "react";
import * as THREE from "three"
import {useFrame} from "@react-three/fiber";
import {Galaxy} from "./Galaxy.jsx";
import {Group} from "three";
import { fadeOnBeforeCompileFlat} from "../utils/fadeMaterial.js";
import {usePlay} from "../contexts/Play.jsx";
import {gsap} from "gsap";


const LINE_NB_POINTS = 1000
const CURVE_DISTANCE = 150;
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_XWING = 0.02;
const XWING_MAX_ANGLE = 35;

export const Experience = () => {


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
    const scroll = useScroll();
    const { setHasScroll, setEnd}= usePlay();

    useFrame((_state, delta) => {
        if(scroll.offset > 0){
            setHasScroll(true);
        }

        const scrollOffset = Math.max(0, scroll.offset-0.01);

        const curPoint = curve.getPoint(scrollOffset);


        // Follow the curve points
        cameraGroup.current.position.lerp(curPoint, delta * 24);
        // console.log(curPoint)


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


        if(cameraGroup.current.position.z < -1474 ){
            setEnd(true)
            planeOutTl.current.play();
        }
    });
    const planeOutTl = useRef();
    const xWing = useRef()

    useLayoutEffect(() => {

        planeOutTl.current = gsap.timeline();
        planeOutTl.current.pause();

        planeOutTl.current.to(
            xWing.current.position,
            {
                duration: 4.5,
                z: -250,
                y: 10,
            },
            0
        );
        planeOutTl.current.to(xWing.current.position, {
            duration: 1,
            z: -2000,
        });
    }, []);

    const { play} = usePlay();

    useEffect(() => {
        if (play) {
            const audio = document.getElementById("background-music");
            audio.play();
        }
    }, [play]);

    return useMemo(()=>(
        <>
            {/*<OrbitControls />*/}
            <group ref={cameraGroup}>
                <Background/>
                <PerspectiveCamera position={[0,0,10]} fov={50} makeDefault={true}/>
                <group ref={xWing}>
                    <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.1}>
                        <Xwing rotation-y={Math.PI/-2} scale={1} position={[0,-1,0]}/>
                    </Float>

                </group>
            </group>
            <group position={[2.1*CURVE_DISTANCE,0.02*CURVE_DISTANCE,0.74*CURVE_DISTANCE]} rotation={[0, 1.3, 0]}>
                <Text anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>
                    Beginning the Odyssey:{"\n"}
                    I started my JavaScript journey{"\n"}
                    Over two years ago,{"\n"}
                    Eager to conquer the ecosystem.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[-0.55*CURVE_DISTANCE,-0.01*CURVE_DISTANCE,-0.4*CURVE_DISTANCE]} rotation={[0, 0.8, 0]}>
                <Text anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>
                    Building Strong Foundations:{"\n"}
                    I mastered JavaScript basics,{"\n"}
                    Laying the groundwork for advanced learning.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[-0.08*CURVE_DISTANCE,-0.423*CURVE_DISTANCE,-2.3*CURVE_DISTANCE]} rotation={[0, -0.3, 0]}>
                <Text anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>
                    Front-End Finesse:{"\n"}
                    I immersed myself in front-end development,{"\n"}
                    Excelling in React.js and{"\n"}
                    Creating captivating interfaces.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[0.72*CURVE_DISTANCE,-0.08*CURVE_DISTANCE,-3.87*CURVE_DISTANCE]} rotation={[0.4, 0.1, -0.1]}>
                <Text anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>
                    Exploring the 3D Realm:{"\n"}
                    Venturing into Three.js and Theatre.js,{"\n"}
                    I explored 3D graphics,{"\n"}
                    Pushing web development boundaries.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[0.18*CURVE_DISTANCE,-0.218*CURVE_DISTANCE,-4.68*CURVE_DISTANCE]} rotation={[0, 0.9, 0]}>
                <Text anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>
                    Back-End Brilliance:{"\n"}
                    Excelling in Express.js and Node.js,{"\n"}
                    I mastered databases like MongoDB and{"\n"}
                    MySQL for a robust back-end.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[-0.58*CURVE_DISTANCE,0.05*CURVE_DISTANCE,-6.55*CURVE_DISTANCE]} rotation={[0.03, -1.5, 0]}>
                <Text anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>
                    Tech Stack Mastery:{"\n"}
                    I polished CSS3, HTML5 skills and{"\n"}
                    Used Git and Jira for{"\n"}
                    Version control and project management.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[1.38*CURVE_DISTANCE,0.02*CURVE_DISTANCE,-7.3*CURVE_DISTANCE]} rotation={[0.6, 0.2, -0.088]} >
                <Text anchorX="right" anchorY="middle" fontSize={0.6} maxWidtk={2.5}>
                    Versatile CMS Skills:{"\n"}
                    Beyond coding, I worked with{"\n"}
                    CMS platforms like Drupal, AEM, and Hybris,{"\n"}
                    Delivering comprehensive web solutions.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[-0.1*CURVE_DISTANCE,0.8*CURVE_DISTANCE,-8.9*CURVE_DISTANCE]} rotation={[0.01, 1.1, 0.02]} >
                <Text  anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>
                    Skills & Qualities Unveiled:{"\n"}
                    Throughout this journey, my commitment, attention to detail,{"\n"}
                    Rapid learning, teamwork, independence, and strong interpersonal skills{"\n"}
                    Have complemented my technical expertise,{"\n"}
                    Making me a well-rounded candidate ready to excel in any development team.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            </group>
            <group position={[0.55*CURVE_DISTANCE,0.4*CURVE_DISTANCE,-9.4*CURVE_DISTANCE]} rotation={[0.02, -1, 0]} >
                <Text  anchorX="right" anchorY="middle" fontSize={0.8} maxWidtk={2.5}>

                    Passions Beyond Code:{"\n"}
                    Alongside my skills,{"\n"}
                    I'm passionate about Star Wars, {"\n"}
                    Outdoor adventures, globetrotting, and cycling,{"\n"}
                    Adding a dynamic dimension to my personality,{"\n"}
                    Making me a well-rounded and enjoyable team member.
                    <meshStandardMaterial color="white" onBeforeCompile={fadeOnBeforeCompileFlat}/>
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
                    <meshStandardMaterial  color={"red"}  transparent={1}  />
                </mesh>
            </group>
            <Galaxy position={[-2, 0, -5 *CURVE_DISTANCE]} scale={CURVE_DISTANCE}/>
        </>
    ),[]
    );
};

