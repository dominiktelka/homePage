import React, { useEffect, useState } from "react";
import styles from './Iphone2.module.css';
import { usePlay } from "../../contexts/Play.jsx";

export default function Iphone2({ scrollPercentage, currentSectionNumber }) {
    const { playGame } = usePlay();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (currentSectionNumber === 8 && playGame) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [currentSectionNumber, playGame]);

    const openProjectPage = () => {
        window.open("https://dominiktelka.github.io/3D-MODEL/", "_blank");
    };

    return (
        isVisible && (
            <section className={styles.iphoneSection}>
                <h1 className={styles.projectTitle}>3D Model Showcase</h1>
                <p className={styles.projectDescription}>
                    3D Model Showcase is my first project exploring 3D technologies. It was created using different technologies and served as my initial venture into the world of 3D development.
                </p>
                <p className={styles.projectTechnologiesTitle}>
                    External Libraries used in this project:
                </p>
                <ul className={styles.projectTechnologiesList}>
                    <li>Styled-components</li>
                    <li>GSAP</li>
                    <li>React-three/drei</li>
                    <li>React-three/fiber</li>
                </ul>
                <div className={styles.projectImageWrapper}>
                    <img
                        className={styles.projectImage}
                        src="./icons/3dmodel.png"
                        alt="Project Image"
                        onClick={openProjectPage}
                    />
                </div>
            </section>
        )
    );
}
