import React, {useEffect, useState} from "react";
import styles from './Begin.module.css'


export default function Begin({scrollPercentage, currentSectionNumber}) {

    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 0.5 / 15
            const opacityEnd = 1 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 1 / 15
            const opacityEnd = 2 / 15

            if (scrollPercentage < opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 1 / 15) {
            setOpacity(getOpacityGrowing())
        } else {
            setOpacity(getOpacityShrinking())
        }


    }, [scrollPercentage])

    return (

        <div className={styles.beginSection} style={{opacity:opacity}}>
            {currentSectionNumber === 2 && (
           <>
                    <h1 className={styles.titleSection}>Hello there!</h1>
                    <p className={styles.pSection}>
                        I am a passionate enthusiast of JavaScript and web development. My journey into this ecosystem began over two years ago, and since then, I have been continuously striving to master it to the fullest extent. I want to share my fascination with this language and the world of web development with you. You can often find me exploring new technologies and honing my skills, ready to take on any challenge that the ever-evolving programming world presents.
                    </p>
           </>
                )}
        </div>



    );

}