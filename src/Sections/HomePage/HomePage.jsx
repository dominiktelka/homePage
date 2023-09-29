import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import { usePlay } from "../../contexts/Play.jsx";

export default function HomePage({ scrollPercentage, currentSectionNumber }) {
    const { playGame } = usePlay();
    const [isVisible, setIsVisible] = useState(false);

    // Funkcja do zamknięcia sekcji
    const closeSection = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (currentSectionNumber === 4 && playGame) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [currentSectionNumber, playGame]);

    return (
        isVisible && (
            <div className={styles.homePageSection}>
                <>
                    <h1 className={styles.homePageTitle}>Welcome to My Portfolio</h1>
                    <p className={styles.homePageDescription}>
                        This is my portfolio website, showcasing my work and
                        projects. Feel free to explore and learn more about my
                        skills and experiences.
                    </p>
                    <p className={styles.homePageTechnologiesTitle}>Technologies used in this project:</p>
                    <ul className={styles.homePageTechnologiesList}>
                        <li>React</li>
                        <li>Three.js (for 3D graphics)</li>
                        <li>GSAP (for animations)</li>
                        <li>CSS Modules (for styling)</li>
                    </ul>
                </>
            </div>
        )
    );
}

