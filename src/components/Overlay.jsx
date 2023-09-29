import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play.jsx";

export const Overlay = () => {
    const { progress } = useProgress();
    const { playGame, setPlayGame, hasScroll} = usePlay();




    return (
        <div className={`overlay ${playGame ? "overlay--disable" : ""}`}>
            {progress === 100 &&(
                <div className={`intro ${playGame ? "intro--disappear" : ""}`}>
                    <h1 className="logo">
                        Hi! I'm Dominik Telka!👋
                    </h1>
                    <h2 className="logo2">Future Frontend Developer</h2>
                    <button
                        className="explore"
                        onClick={() => {
                            setPlayGame(true);
                        }}
                    >
                        Explore
                    </button>
                </div>
            )}
        </div>
    );
};