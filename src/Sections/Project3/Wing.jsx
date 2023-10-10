import React, { useEffect, useState } from "react";
import styles from './Xwing.module.css'; // Zmień na odpowiednią ścieżkę do pliku CSS
import { usePlay } from "../../contexts/Play.jsx";

export default function Xwing({ currentSectionNumber }) {
    const { playGame } = usePlay();
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
        if (currentSectionNumber === 10 && playGame) {
            setIsVisible(true);
            setIsMobile(window.innerWidth > window.innerHeight);
        } else {
            setIsVisible(false);
        }
    }, [currentSectionNumber, playGame]);

    const openProjectPage = () => {
        window.open("https://game-v1-mocha.vercel.app/", "_blank");
    };

    return (
        isVisible && (
            <div className={styles.xwingSection}>
                <h1 className={styles.projectTitle}>X-Wing 3D Model</h1>
                <p className={styles.projectDescription}>
                    {isMobile ? (
                        "X-Wing 3D Model is my project showcasing the iconic starfighter from the Star Wars universe. This 3D model was created using various technologies and served as a tribute to the beloved franchise."
                    ) : (
                        "To experience the full game, we recommend using a laptop or desktop computer. Unfortunately, the controls have not been optimized for mobile devices yet."
                    )}
                </p>
                    <>
                        <p className={styles.projectExplore}>
                            **Controls**
                        </p>
                        <ul className={styles.projectTechnologiesList}>
                            <li>W - Move Forward</li>
                            <li>S - Move Backward</li>
                            <li>Mouse Up - Move Down</li>
                            <li>Mouse Down - Move Up</li>
                        </ul>
                        <p className={styles.projectExplore}>
                            *Please note that the project is currently in testing phases, and controls are being refined for the best user experience.*
                        </p>
                    </>

                <div className={isMobile ? styles.projectImageWrapper : styles.projectImageWrapperMobile} onClick={isMobile ? openProjectPage : null}>
                    <video className={styles.projectVideo} loop autoPlay={currentSectionNumber === 10 && playGame}>
                        <source src="./video/xwing.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        )
    );
}
