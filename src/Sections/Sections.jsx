
import React from "react";
import Begin from "./Begining/Begin.jsx";
import Start from "./Start/Start.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import Iphone from "./Iphone/Iphone.jsx";
import Education from "./Education/Education.jsx";
import Iphone2 from "./Iphone2/Iphone2.jsx";
import Xwing from "./Project3/Wing.jsx";






export default function Sections({currentSectionNumber,scrollPercentage}) {





    return (
        <>
            <Start scrollPercentage={scrollPercentage} currentSectionNumber={currentSectionNumber}/>
            <Begin scrollPercentage={scrollPercentage}currentSectionNumber={currentSectionNumber}/>
            <HomePage scrollPercentage={scrollPercentage}currentSectionNumber={currentSectionNumber}/>
            <Iphone scrollPercentage={scrollPercentage}currentSectionNumber={currentSectionNumber}/>
            <Iphone2 scrollPercentage={scrollPercentage}currentSectionNumber={currentSectionNumber}/>
            <Education scrollPercentage={scrollPercentage}currentSectionNumber={currentSectionNumber}/>
            <Xwing scrollPercentage={scrollPercentage}currentSectionNumber={currentSectionNumber}/>
        </>
    );

}