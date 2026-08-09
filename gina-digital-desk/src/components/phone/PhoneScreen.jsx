import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./phone.css";

const PHONE_NUMBER = "085176970505";

export default function PhoneScreen({ onClose }) {
    const [number, setNumber] = useState("");
    const [status, setStatus] = useState("idle");

    const voiceRef = useRef(null);
    const ringRef = useRef(null);
    const endRef = useRef(null);

    const keys = [
        ["1", ""],
        ["2", "ABC"],
        ["3", "DEF"],
        ["4", "GHI"],
        ["5", "JKL"],
        ["6", "MNO"],
        ["7", "PQRS"],
        ["8", "TUV"],
        ["9", "WXYZ"],
        ["*", ""],
        ["0", "+"],
        ["#", ""]
    ];

    const handleNumber = (value) => {
        if (status !== "idle") return;
        if (number.length >= 12) return;
        setNumber((current) => current + value);
    };

    const handleDelete = () => {
        if (status !== "idle") return;
        setNumber((current) => current.slice(0, -1));
    };

    const stopAllAudio = () => {
        const audios = [
            voiceRef.current,
            ringRef.current,
            endRef.current
        ];

        audios.forEach((audio) => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    };

    const handleCall = () => {
        if (number !== PHONE_NUMBER) {
            setStatus("error");

            setTimeout(() => {
                setStatus("idle");
            }, 1400);

            return;
        }

        stopAllAudio();
        setStatus("calling");

        if (ringRef.current) {
            ringRef.current.currentTime = 0;
            ringRef.current.play().catch(() => {
                console.log("Nada dering membutuhkan interaksi pengguna.");
            });
        }

        setTimeout(() => {
            if (ringRef.current) {
                ringRef.current.pause();
                ringRef.current.currentTime = 0;
            }

            setStatus("connected");
        }, 2200);
    };

    const handleHangup = () => {
        stopAllAudio();

        if (endRef.current) {
            endRef.current.currentTime = 0;
            endRef.current.play().catch(() => {
                console.log("Nada putus membutuhkan interaksi pengguna.");
            });
        }

        setStatus("idle");
        setNumber("");
    };

    useEffect(() => {
        if (status !== "connected") return;

        if (voiceRef.current) {
            voiceRef.current.currentTime = 0;
            voiceRef.current.play().catch(() => {
                console.log("Audio suara Gina membutuhkan interaksi pengguna.");
            });
        }
    }, [status]);

    useEffect(() => {
        return () => {
            stopAllAudio();
        };
    }, []);

    const formatNumber = () => {
        if (!number) return "enter number";
        return number;
    };

    return (
        <motion.div
            className="phone-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <button
                type="button"
                className="phone-overlay-close"
                onClick={() => {
                    stopAllAudio();
                    onClose();
                }}
                aria-label="Close phone"
            >
                ×
            </button>

            <motion.div
                className="phone-scene"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <motion.div
                    className="phone-card"
                    initial={{ opacity: 0, x: -30, rotate: -8 }}
                    animate={{ opacity: 1, x: 0, rotate: -8 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                >
                    <img
                        src="/assets/phone/call-card.webp"
                        alt="Gina contact card"
                    />
                </motion.div>

                <motion.div
                    className="phone-device"
                    initial={{ opacity: 0, x: 30, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 5 }}
                    transition={{ delay: 0.05, duration: 0.4 }}
                >
                    <div className="phone-screen">
                        <div className="phone-status-bar">
                            <span>9:41</span>
                            <span>● ● ▮</span>
                        </div>

                        <div className="phone-display">
                            {status === "calling" && (
                                <div className="phone-calling">
                                    <span className="phone-avatar">G</span>
                                    <strong>Gina</strong>
                                    <small>calling...</small>

                                    <div className="phone-call-animation">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            )}

                            {status === "connected" && (
                                <div className="phone-calling">
                                    <span className="phone-avatar">G</span>
                                    <strong>Gina</strong>
                                    <small>connected</small>

                                    <div className="phone-speaking">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            )}

                            {status === "idle" && (
                                <div className="phone-number-display">
                                    {formatNumber()}
                                </div>
                            )}

                            {status === "error" && (
                                <div className="phone-error">
                                    wrong number
                                </div>
                            )}
                        </div>

                        {status === "idle" && (
                            <>
                                <div className="phone-keypad">
                                    {keys.map(([value, letters]) => (
                                        <button
                                            key={value}
                                            type="button"
                                            onClick={() => handleNumber(value)}
                                        >
                                            <strong>{value}</strong>
                                            {letters && <small>{letters}</small>}
                                        </button>
                                    ))}
                                </div>

                                <div className="phone-actions">
                                    <button
                                        type="button"
                                        className="phone-delete"
                                        onClick={handleDelete}
                                    >
                                        delete
                                    </button>

                                    <button
                                        type="button"
                                        className="phone-call"
                                        onClick={handleCall}
                                        aria-label="Call Gina"
                                    >
                                        ☎
                                    </button>

                                    <span />
                                </div>
                            </>
                        )}

                        {(status === "calling" || status === "connected") && (
                            <div className="phone-active-call">
                                {status === "connected" && (
                                    <button
                                        type="button"
                                        className="phone-hangup"
                                        onClick={handleHangup}
                                    >
                                        <span>●</span>
                                        end call
                                    </button>
                                )}

                                {status === "calling" && (
                                    <button
                                        type="button"
                                        className="phone-hangup"
                                        onClick={handleHangup}
                                    >
                                        cancel
                                    </button>
                                )}
                            </div>
                        )}

                        <div className="phone-home-indicator" />
                    </div>
                </motion.div>
            </motion.div>

            <audio
                ref={ringRef}
                src="/assets/phone/call-ring.mp3"
                preload="auto"
                loop
            />

            <audio
                ref={voiceRef}
                src="/assets/phone/gina-call.mp3"
                preload="auto"
            />

            <audio
                ref={endRef}
                src="/assets/phone/call-end.mp3"
                preload="auto"
            />

            <p className="phone-hint">
                enter the number from the card
            </p>
        </motion.div>
    );
}