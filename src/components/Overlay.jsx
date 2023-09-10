import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import MusicControls from "./MusicControls.jsx";
import {useRef} from "react";

export const Overlay = () => {
    const { progress } = useProgress();
    const { play, setPlay, hasScroll, end} = usePlay();
    const audioRef = useRef(null);


//@todo try to take scrolldown from iphone and implement it in app.jsx, BEST OPTION TO GET GOOD EXEPRIENCE ON MOBILE IS TO CHANGE FOV TO 50 MAYBE, ON LAPTOP LOOKS ALSO GOOD
    return (
        <div className={`overlay ${play ? "overlay--disable" : ""} ${hasScroll ? "overlay--scrolled" : ""}`}>
            <div
                className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
            />
            {progress === 100 &&(
                <div className={`intro ${play ? "intro--disappear" : ""}`}>
                    <h1 className="logo">
                        Hi! I'm Dominik Telka!👋
                    </h1>
                    <h2 className="logo2">Future Frontend Developer</h2>
                    <p className="intro__scroll">Scroll to begin the journey</p>
                    <button
                        className="explore"
                        onClick={() => {
                            setPlay(true);

                        }}
                    >
                        Explore
                    </button>
                </div>
            )}
            {play && (
                <>
                    <audio
                        ref={audioRef}
                        id="background-music"
                        src="./music/Galactic-CCC_1.mp3"
                        loop
                        style={{ display: "none" }}

                    ></audio>
                    <MusicControls audioRef={audioRef}/>
                </>
                )
            }
            <div className={`outro ${end ? "outro--appear" : ""}`} >
                <p className="outro__text">Wish you had a great fun with me...</p>
            </div>
            <div className={`iconsContainer ${end ? "iconsContainer--appear" : ""}`} style={{ pointerEvents: end ? 'all' : 'none' }} >
                <img src={'./icons/instagram.png'}
                     onClick={() => window.location.href = "https://www.instagram.com/dentek9/"}/>
                <img src={'./icons/linkedin.png'}
                     onClick={() => window.location.href = "https://www.linkedin.com/in/dominik-telka-203102183/"}/>
                <img src={'./icons/githubFiolet.png'} onClick={() => window.location.href ='https://github.com/dominiktelka'}/>
            </div>
        </div>
    );
};