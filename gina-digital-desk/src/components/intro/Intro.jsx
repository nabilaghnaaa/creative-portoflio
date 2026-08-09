import { motion } from "motion/react";

export default function Intro({ onEnter }) {
    return (
        <motion.div
            className="intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="intro-overlay" />

            <motion.div
                className="intro-content"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2
                }}
            >
                <motion.span
                    className="intro-kicker"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.35
                    }}
                >
                    WELCOME TO
                </motion.span>

                <motion.h1
                    className="intro-title"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.45
                    }}
                >
                    Gina's
                    <br />
                    <span>digital desk.</span>
                </motion.h1>

                <motion.p
                    className="intro-description"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.7
                    }}
                >
                    A little corner of the internet where
                    my work, memories, hobbies, and random
                    things I love come together.
                </motion.p>

                <motion.button
                    type="button"
                    className="intro-enter"
                    onClick={onEnter}
                    initial={{
                        opacity: 0,
                        y: 10
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.95
                    }}
                    whileTap={{
                        scale: 0.96
                    }}
                >
                    explore my desk
                    <span>→</span>
                </motion.button>
            </motion.div>

            <motion.div
                className="intro-note"
                initial={{
                    opacity: 0,
                    rotate: 8,
                    y: 15
                }}
                animate={{
                    opacity: 1,
                    rotate: 3,
                    y: 0
                }}
                transition={{
                    duration: 0.6,
                    delay: 1.1
                }}
            >
                <span>little reminder</span>

                <p>
                    everything on this desk
                    tells a little story.
                </p>
            </motion.div>

            <div className="intro-footer">
                <span>regina rana nabila</span>
                <span>web developer · creative person</span>
            </div>
        </motion.div>
    );
}