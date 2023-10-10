import React, { useEffect, useState } from "react";
import styles from './Education.module.css';
import { usePlay } from "../../contexts/Play.jsx";

export default function Education({ currentSectionNumber }) {
    const { playGame } = usePlay();
    const [isVisible, setIsVisible] = useState(false);

    // Funkcja do zamknięcia sekcji
    const closeSection = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (currentSectionNumber === 12 && playGame) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [currentSectionNumber, playGame]);

    return (
        isVisible && (
            <section className={styles.educationSection}>
                <h1 className={styles.educationTitle}>EDUCATION</h1>
                <div className={styles.educationItem}>
                    <h2 className={styles.educationSubtitle}>Studies in Safety Engineering</h2>
                    <p className={styles.educationSchool}>T. Kosciuszko Land Forces Academy</p>
                    <p className={styles.educationLocation}>Wroclaw, Poland</p>
                    <p className={styles.educationDate}>09.2014 - 02.2018</p>
                    <p className={styles.educationDescription}>Completed my studies in Safety Engineering at T. Kosciuszko Land Forces Academy in Wroclaw, Poland.</p>
                    <p className={styles.educationThesis}>Wrote a thesis on the topic of photovoltaic panels on flexible substrates.</p>
                </div>
            </section>
        )
    );
}
