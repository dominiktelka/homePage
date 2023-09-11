import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import MusicControls from "./MusicControls.jsx";
import {useRef} from "react";

export const Overlay = () => {
    const { progress } = useProgress();
    const { play, setPlay, hasScroll, end} = usePlay();
    const audioRef = useRef(null);

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
                    <p className="intro__scroll">Scroll to begin the journey</p>
                    <div className="intro__mouse"></div>
                </>
                )
            }
            <div className={`outro ${end ? "outro--appear" : ""}`} >
                <p className="outro__text">Wish you had a great fun with me...</p>
            </div>
            <div className={`iconsContainer ${end ? "iconsContainer--appear" : ""}`} style={{ pointerEvents: end ? 'all' : 'none' }} >
                <p className="info">Contact me 📨 </p>
                <img className="img" src={'./icons/linkedin.png'} onClick={() => window.location.href = "https://www.linkedin.com/in/dominik-telka-203102183/"}/>
                <p className="info">Check Github for more projects 💻 </p>
                <img className="img" src={'./icons/githubFiolet.png'} onClick={() => window.location.href ='https://github.com/dominiktelka'}/>
            </div>
        </div>
    );
};