import React, {Suspense, useState} from "react";
import {Overlay} from "./components/Overlay.jsx";
import {Scene} from "./components/Scene.jsx";
import LoadingScreen from "./loading-screen/LoadingScreen.jsx";
import LoadingUpdater from "./loading-screen/LoadingUpdater.jsx";
import {usePlay} from "./contexts/Play.jsx";
import * as THREE from "three";
import {EndScreen} from "./components/EndScreen.jsx";




function App() {
    const [isLoading, setIsLoading] = useState(true)



  return (
    <>
        <LoadingScreen isVisible={isLoading}/>
        <Suspense fallback={null}>
            <LoadingUpdater setIsLoading={setIsLoading}/>
            <Scene/>
            <Overlay/>
            <EndScreen/>
        </Suspense>
    </>
  );
}

export default App;
