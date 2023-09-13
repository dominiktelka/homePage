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
            <div className={`${end ? "outro--appear" : "outro"}`} >
                <p className="outro__text">
                    Beginning the Odyssey: I started my JavaScript journey over two years ago, eager to conquer the entire ecosystem.</p>
                <p className="outro__text">  Building Strong Foundations: I mastered JavaScript basics, laying the groundwork for advanced learning.</p>
                <p className="outro__text">  Front-End Finesse: I immersed myself in front-end development, excelling in React.js and creating captivating interfaces.</p>
                <p className="outro__text">  Exploring the 3D Realm: Venturing into Three.js and Theatre.js, I explored 3D graphics, pushing web development boundaries.</p>
                <p className="outro__text">   Back-End Brilliance: Excelling in Express.js and Node.js, I mastered databases like MongoDB and MySQL for a robust back-end.</p>
                <p className="outro__text">  Tech Stack Mastery: I polished CSS3, HTML5, and SASS skills, and used Git and Jira for version control and project management.</p>
                <p className="outro__text">  Versatile CMS Skills: Beyond coding, I worked with CMS platforms like Drupal, AEM, and Hybris, delivering comprehensive web solutions.</p>
                <p className="outro__text">  Skills AND Qualities Unveiled: Throughout this journey, my commitment, attention to detail, rapid learning, teamwork, independence, and strong interpersonal skills have complemented my technical expertise, making me a well-rounded candidate ready to excel in any development team.</p>
                <p className="outro__text"> </p>
            </div>
            <div className={` ${end ? "iconsContainer--appear" : "iconsContainer"}`} style={{ pointerEvents: end ? 'all' : 'none' }} >
                <p className="info">Contact me 📨 </p>
                <img className="img" src={'./icons/linkedin.png'} onClick={() => window.location.href = "https://www.linkedin.com/in/dominik-telka-203102183/"}/>
                <p className="info2">Check Github for more projects 💻 </p>
                <img className="img2" src={'./icons/githubFiolet.png'} onClick={() => window.location.href ='https://github.com/dominiktelka'}/>
            </div>
        </div>
    );
};