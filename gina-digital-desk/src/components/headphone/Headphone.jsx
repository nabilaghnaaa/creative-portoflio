import { useRef, useState } from "react";
import DeskObject from "../desk/DeskObject";
import "./headphone.css";

export default function Headphone() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/assets/music/favorite-song.mp3");

            audioRef.current.addEventListener("ended", () => {
                setIsPlaying(false);
            });
        }

        if (audioRef.current.paused) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    console.error("Gagal memutar musik:", error);
                });
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <DeskObject
            src="/assets/desk/headphone.webp"
            alt={isPlaying ? "Pause favorite song" : "Play favorite song"}
            className={`desk-headphone ${isPlaying ? "is-playing" : ""}`}
            rotate={-8}
            label={isPlaying ? "playing now" : "favorite song"}
            onClick={handleClick}
        />
    );
}