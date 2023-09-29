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
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 1 && styles.buttonInfo2}`}  style={{zIndex:20}} onClick={() => setRequestScrollToSection(0)}>Start</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 2 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(1)}>Introduction</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 4 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(3)}>HomePage</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 6 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(5)}>Iphone</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 8 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(7)}>Iphone 2</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 10 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(9)}>Education</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 12 && styles.buttonInfo2}`}   style={{zIndex:20}} onClick={() => setRequestScrollToSection(11)}>Xwing</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 14 && styles.buttonInfo2}`}  style={{zIndex:20}} onClick={() => setRequestScrollToSection(13)}>UFO</button>
            <button className={`${styles.buttonInfo} ${currentSectionNumber === 16 && styles.buttonInfo2}`}  style={{zIndex:20}} onClick={() => setRequestScrollToSection(14)}>End</button>
        </section>
    );

}