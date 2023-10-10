import React from "react";
import {usePlay} from "../../contexts/Play.jsx";
import styles from "./BtnEnd.module.css";


export const EndButton = () => {
    const {setEnd} = usePlay();

    return (
        <section className={styles.buttonEndSection}>
            <button  className={styles.bttnEnd} onClick={() =>{setEnd(true)}}>Click for more details</button>
        </section>
    );
};