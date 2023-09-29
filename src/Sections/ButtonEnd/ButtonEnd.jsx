import React from "react";
import {usePlay} from "../../contexts/Play.jsx";
import styles from "./BtnEnd.module.css";


export const EndButton = () => {
    const {end, setEnd} = usePlay();

    return (
        <section className={styles.buttonEndSection}>
            <button  className={styles.bttnEnd} onClick={() =>{setEnd(true)}}>Klick for more details</button>
        </section>
    );
};