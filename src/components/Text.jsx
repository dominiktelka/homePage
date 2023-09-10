import {Text} from "@react-three/drei";

import React from "react";


import {fadeOnBeforeCompileFlat} from "../utils/fadeMaterial.js";

export const TextSpace = ({CURVE_DISTANCE}) => {

    return <>
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
    </>
};


