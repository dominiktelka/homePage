import React, {Suspense, useState} from "react";
import {Overlay} from "./components/Overlay.jsx";
import {Scene} from "./components/Scene.jsx";
import LoadingScreen from "./loading-screen/LoadingScreen.jsx";
import LoadingUpdater from "./loading-screen/LoadingUpdater.jsx";



function App() {
    const [isLoading, setIsLoading] = useState(true)

  return (
    <>
        <LoadingScreen isVisible={isLoading}/>
        <Suspense fallback={null}>
            <LoadingUpdater setIsLoading={setIsLoading}/>
            <Scene/>
            <Overlay/>
        </Suspense>
    </>
  );
}

export default App;
