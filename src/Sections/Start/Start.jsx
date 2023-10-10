import React, { useEffect, useState } from "react";
import styles from "./Start.module.css";
import { usePlay } from "../../contexts/Play.jsx";

export default function Start({ scrollPercentage, currentSectionNumber }) {
    const { playGame } = usePlay();
    const [isVisible, setIsVisible] = useState(false);

    // Funkcja do zamknięcia sekcji
    const closeSection = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (currentSectionNumber === 1 && playGame) {
            // Ustaw opóźnienie na 2000 milisekund (2 sekundy) przed pojawieniem się sekcji
                setIsVisible(true);

        } else {
            setIsVisible(false);
        }

        // Wyczyść timer po odmontowaniu komponentu lub gdy currentSectionNumber zmienia się

    }, [currentSectionNumber, playGame]);





    const textBigWidth = (
        <>
            <h1 className={styles.h1Start}>Controls on PC/Laptop</h1>
            <p className={styles.pStart}>
                For better performance, please use the buttons at the bottom of
                the screen. Their tags describe sections. You can also jump to any
                section by clicking on the buttons, and the buttons will highlight
                to indicate the current section you've jumped to. Explore and enjoy
                the interactive experience!
            </p>
        </>
    )

    const textMobile = (
        <>
            <h1 className={styles.h1Start}>Controls on Mobile/Tablet</h1>
            <p className={styles.pStart}>
                You can use both scrolling and the buttons to navigate through the
                sections. The buttons at the bottom of the screen are labeled to
                describe each section. When you click on a button, you'll jump to
                the corresponding section, and the buttons will highlight to show
                your current location. Dive into the experience and see how it all
                works! We'll explain more about it in the "Projects" section.
            </p>
        </>
    )

    return (
        <div className={styles.popupSection} style={{ opacity: isVisible ? 1 : 0 , zIndex: isVisible ? 0 : -1, transition: isVisible ? "opacity 4s ease" : "none"}}>
                <button className={styles.closeButton} onClick={closeSection}>
                    X
                </button>
                { window.innerWidth > window.innerHeight ? textBigWidth : textMobile }
        </div>
    );
}



// const [opacity, setOpacity] = useState(0)
// useEffect(() => {
//
//     const getOpacityGrowing = () => {
//
//         const opacityMinimal = 0
//         const opacityMaximal = 1
//         const opacityStart = 1.8 / 15
//         const opacityEnd = 2.4 / 15
//
//         if (scrollPercentage < opacityStart) return opacityMinimal
//         if (scrollPercentage > opacityEnd) return opacityMaximal
//
//         return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
//     }
//
//     const getOpacityShrinking = () => {
//
//         const opacityMinimal = 0
//         const opacityMaximal = 1
//         const opacityStart = 2.5 / 15
//         const opacityEnd = 3 / 15
//
//         if (scrollPercentage < opacityStart) return opacityMaximal
//         if (scrollPercentage > opacityEnd) return opacityMinimal
//
//         return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
//     }
//
//     if (scrollPercentage < 2 / 15) {
//         setOpacity(getOpacityGrowing())
//     } else {
//         setOpacity(getOpacityShrinking())
//     }
//
//
// }, [scrollPercentage])