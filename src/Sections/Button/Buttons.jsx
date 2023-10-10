import React, {useEffect, useRef} from "react";
import {usePlay} from "../../contexts/Play.jsx";
import styles from './Button.module.css'


export default function ControlButtons({ currentSectionNumber ,scrollPercentage, setRequestScrollToSection}) {
        const { isSoundPlaying, setIsSoundPlaying } = usePlay();


        const toggleSound = () => {
                setIsSoundPlaying(!isSoundPlaying);
        };

    return (
        <section className={styles.sectionButtons}>
            <button className={styles.buttonInfo}  onClick={toggleSound}>{isSoundPlaying ? "🔈" : "🔇"}</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 1 && styles.buttonInfo2}`}  style={{zIndex:20}} onClick={() => setRequestScrollToSection(0)}>Control</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 2 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(1)}>Introduction</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 4 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(3)}>Portfolio</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 6 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(5)}>Project 1</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 8 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(7)}>Project 2</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 10 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(9)}>Project 3</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 12 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(11)}>Education</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 14 && styles.buttonInfo2}`}  style={{zIndex:20}} onClick={() => setRequestScrollToSection(13)}>Animation</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 16 && styles.buttonInfo2}`}  style={{zIndex:20}} onClick={() => setRequestScrollToSection(14)}>Summary</button>
        </section>
    );

}