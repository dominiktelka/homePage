import React, { useEffect, useState } from "react";
import styles from './Iphone.module.css';
import { usePlay } from "../../contexts/Play.jsx";

export default function Iphone({ scrollPercentage, currentSectionNumber }) {
    const { playGame } = usePlay();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (currentSectionNumber === 6 && playGame) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [currentSectionNumber, playGame]);

    const openProjectPage = () => {
        window.open("https://dominiktelka.github.io/Nikifor-Iphone/", "_blank");
    };

    return (
        isVisible && (
            <div className={styles.iphoneSection}>
                <h1 className={styles.projectTitle}>Iphone ShowCase</h1>
                <p className={styles.projectDescription}>
                    Iphone ShowCase is my 3D project showcasing various
                    technologies and creative exploration.
                </p>
                <p className={styles.projectTechnologiesTitle}>
                    In this project, I've used the following technologies:
                </p>
                <ul className={styles.projectTechnologiesList}>
                    <li>Theatre.js (for camera control)</li>
                    <li>React Three Fiber (for 3D rendering)</li>
                    <li>React (for building the UI)</li>
                    <li>React Three Fibre/Drei</li>
                </ul>
                <div className={styles.projectImageWrapper}>
                    <video className={styles.projectVideo} loop autoPlay={currentSectionNumber === 6 && playGame} onClick={openProjectPage}>
                        <source src="./video/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        )
    );
}
