import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
    const { progress } = useProgress();
    const { play, setPlay, hasScroll, end} = usePlay();

//@todo try to take scrolldown from iphone and implement it in app.jsx, BEST OPTION TO GET GOOD EXEPRIENCE ON MOBILE IS TO CHANGE FOV TO 50 MAYBE, ON LAPTOP LOOKS ALSO GOOD
    return (
        <div className={`overlay ${play ? "overlay--disable" : ""} ${hasScroll ? "overlay--scrolled" : ""}`}>
            <div
                className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
            />
            {progress === 100 &&(
                <div className={`intro ${play ? "intro--disappear" : ""}`}>
                    <h1 className="logo">
                        Hi! I'm Dominik Telka!👋{"\n"}
                        Future Frontend Developer
                    </h1>
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
            <div className={`outro ${end ? "outro--appear" : ""}`}>
                <p className="outro__text">Wish you had a great fun with me...</p>
                <div className="iconsContainer">
                    <img src={'./icons/instagram.png'}
                         onClick={() => window.location.href = "https://www.instagram.com/dentek9/"}/>
                    <img src={'./icons/linkedin.png'}
                         onClick={() => window.location.href = "https://www.linkedin.com/in/dominik-telka-203102183/"}/>
                    <img src={'./icons/githubFiolet.png'} onClick={() => window.location.href ='https://github.com/dominiktelka'}/>
                </div>
            </div>
        </div>
    );
};