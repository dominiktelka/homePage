import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {usePlay} from "../contexts/Play.jsx";


export default function AudioComponent() {
    const { isSoundPlaying } = usePlay();
    const soundRef = useRef(null);

    useEffect(() => {
        if (!soundRef.current) {
            const listener = new THREE.AudioListener();
            const sound = new THREE.Audio(listener);
            const audioLoader = new THREE.AudioLoader();

            audioLoader.load('./music/Galactic.mp3', function (buffer) {
                sound.setBuffer(buffer);
                sound.setLoop(true);
                sound.setVolume(0.02);
                soundRef.current = sound;

                if (isSoundPlaying) {
                    soundRef.current.play();
                }
            });
        } else {
            if (isSoundPlaying) {
                soundRef.current.play();
            } else {
                soundRef.current.stop();
            }
        }
    }, [isSoundPlaying]);

    return null;
}