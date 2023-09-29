import styles from './ScrollControls.module.css'
import {useEffect, useRef} from "react";


export default function ScrollControls({ sectionsAmount, requestScrollToSection, setRequestScrollToSection, setScrollPercentage}) {

    const mainContainerRef = useRef()
    // const scrollPercentageRef = useRef(0)
    //
    // useEffect(() => {
    //     if (requestScrollToSection !== null) {
    //         mainContainerRef.current.children.item(requestScrollToSection)
    //         setRequestScrollToSection(null)
    //     }
    // }, [requestScrollToSection])
    //
    //
    // const handleScroll = (e) => {
    //     const targetScrollPercentage =
    //         e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight);
    //
    //     // Wygładzanie wartości scrolla
    //     const smoothingFactor = 0.1; // Im niższa wartość, tym większe wygładzenie
    //     scrollPercentageRef.current +=
    //         (targetScrollPercentage - scrollPercentageRef.current) * smoothingFactor;
    //
    //     setScrollPercentage(scrollPercentageRef.current);
    // };
    //
    // useEffect(() => {
    //     // Ustawienie początkowej wartości wygładzonej wartości scrolla
    //     scrollPercentageRef.current = 0;
    // }, []);

    // const isMobileDevice = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // const handleScroll = (e) => {
    //     const scrollPercentage = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)
    //     setScrollPercentage(scrollPercentage)
    // }

    useEffect(() => {
        if (requestScrollToSection !== null) {
            mainContainerRef.current.children.item(requestScrollToSection).scrollIntoView({behavior: 'smooth'})
            setRequestScrollToSection(null)
        }
    }, [requestScrollToSection])


    const handleScroll = (e) => {
        const scrollPercentage = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)
        setScrollPercentage(scrollPercentage)
    }

    return (
        <div className={styles.mainContainer} ref={mainContainerRef} onScroll={handleScroll}>
            {Array.from({ length: sectionsAmount }, (_, index) => (
                <div className={styles.section} key={index} />
            ))}
        </div>
    )

}

// const handleScroll = (e) => {
//     const targetScrollPercentage =
//         e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight);
//
//     const smoothingFactor = 0.1;
//     let newScrollPercentage = scrollPercentageRef.current +
//         (targetScrollPercentage - scrollPercentageRef.current) * smoothingFactor;
//
//     // Dodaj wartość tylko jeśli użytkownik nie jest na urządzeniu mobilnym
//     if (!isMobileDevice) {
//         newScrollPercentage += 0.005;
//     }
//
//     scrollPercentageRef.current = newScrollPercentage;
//     setScrollPercentage(newScrollPercentage);
//     console.log(newScrollPercentage);
// };
//
//
// useEffect(() => {
//     scrollPercentageRef.current = 0;
// }, []);
