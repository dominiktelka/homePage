import React, {Suspense, useState} from "react";
import {Overlay} from "./components/Overlay.jsx";
import {Scene} from "./components/Scene.jsx";
import LoadingScreen from "./loading-screen/LoadingScreen.jsx";
import LoadingUpdater from "./loading-screen/LoadingUpdater.jsx";
import {usePlay} from "./contexts/Play.jsx";
import {EndScreen} from "./components/EndScreen/EndScreen.jsx";
import ScrollControls from "./controls/ScrollControls.jsx";
import ControlButtons from "./Sections/Button/Buttons.jsx";
import Sections from "./Sections/Sections.jsx";
import AudioComponent from "./components/Audio.jsx";
import {EndButton} from "./Sections/ButtonEnd/ButtonEnd.jsx";




function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [requestScrollToSection, setRequestScrollToSection] = useState(0)
    const {playGame,setEnd}= usePlay()

    const calculateSectionRange = (sectionNumber) => {
        const sectionPercentage = 100 / 15;
        const startPercentage = (sectionNumber -1) * sectionPercentage - 0.01;
        const endPercentage = sectionNumber * sectionPercentage - 0.01;
        return { startPercentage, endPercentage };
    };


    const generateSections = (scrollPercentage) => {
        let visibleSection = null;

        for (let i = 1; i <= 16; i++) {
            const { startPercentage, endPercentage } = calculateSectionRange(i);
            if (scrollPercentage >= startPercentage / 100 && scrollPercentage <= endPercentage / 100) {
                visibleSection = i;
                break;
            }
        }
        return visibleSection;
    };

    const currentSectionNumber = generateSections(scrollPercentage);



  return (
    <>
        <LoadingScreen isVisible={isLoading}/>
        <Suspense fallback={null}>
            <LoadingUpdater setIsLoading={setIsLoading}/>
            <Scene scrollPercentage={scrollPercentage}/>
            <Overlay/>
            <EndScreen />
            {playGame && <ScrollControls sectionsAmount={15}
                            setScrollPercentage={setScrollPercentage}
                            requestScrollToSection={requestScrollToSection}
                            setRequestScrollToSection={setRequestScrollToSection}
                            >
            </ScrollControls>}

            {scrollPercentage >= 0.98 && <EndButton/>}


            <Sections scrollPercentage={scrollPercentage} currentSectionNumber={currentSectionNumber}/>
            <AudioComponent/>
            {playGame && <ControlButtons setRequestScrollToSection={setRequestScrollToSection} currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage} />
            }
        </Suspense>
    </>
  );

}

export default App;
