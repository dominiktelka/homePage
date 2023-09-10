import React, {useState} from "react";

const MusicControls = ({audioRef}) => {
    const [musicPlaying, setMusicPlaying] = useState(true);

    const handleToggleMusic = () => {
        if (audioRef.current) {
            if (musicPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setMusicPlaying(!musicPlaying);
        }
    };

    return (
        <div className="music-controls">
            <button onClick={handleToggleMusic} className="musicButton">
                {musicPlaying ? "🔈" : "🔇"}
            </button>
        </div>
    );
};

export default MusicControls;