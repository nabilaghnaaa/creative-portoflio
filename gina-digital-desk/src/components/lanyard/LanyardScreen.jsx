import { motion } from "motion/react";
import "./lanyard.css";

const experiences = [
    {
        year: "2023",
        title: "Gadis Model Indonesia",
        category: "Modeling",
        number: "01",
        text: "One of the chapters in my modeling journey, where I learned more about confidence, presentation, and expressing myself in front of people and the camera."
    },
    {
        year: "2022",
        title: "Gadis Model Indonesia",
        category: "Modeling",
        number: "02",
        text: "An early experience that became part of my journey in modeling and helped me grow my confidence, presence, and self-expression."
    },
    {
        year: "2023",
        title: "Miss Beauty Indonesia",
        category: "Beauty",
        number: "03",
        text: "An experience that became part of my journey in beauty, confidence, presentation, and learning how to carry myself with more confidence."
    }
];

export default function LanyardScreen({ onClose }) {
    return (
        <motion.div
            className="lanyard-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <motion.div
                className="lanyard-window"
                initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 30,
                    rotate: -1.5
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: 0
                }}
                transition={{
                    duration: 0.45,
                    type: "spring",
                    stiffness: 180,
                    damping: 18
                }}
            >
                <button
                    type="button"
                    className="lanyard-close"
                    onClick={onClose}
                    aria-label="Close lanyard"
                >
                    ×
                </button>

                <div className="lanyard-paper-tape lanyard-paper-tape-top" />
                <div className="lanyard-paper-tape lanyard-paper-tape-bottom" />

                <div className="lanyard-layout">
                    <aside className="lanyard-visual">
                        <div className="lanyard-visual-label">
                            <span>04</span>
                            <small>
                                PERSONAL
                                <br />
                                ARCHIVE
                            </small>
                        </div>

                        <div className="lanyard-hanger">
                            <div className="lanyard-string">
                                <span />
                                <span />
                            </div>

                            <motion.div
                                className="lanyard-card-holder"
                                initial={{
                                    rotate: -5,
                                    y: -15
                                }}
                                animate={{
                                    rotate: -2,
                                    y: 0
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5
                                }}
                            >
                                <img
                                    src="/assets/desk/lanyard.webp"
                                    alt="Gina modeling lanyard"
                                    draggable="false"
                                />
                            </motion.div>
                        </div>

                        <div className="lanyard-visual-caption">
                            <span>A LITTLE PIECE</span>
                            <strong>of my journey.</strong>
                            <p>
                                Memories, confidence, and stories
                                collected along the way.
                            </p>
                        </div>
                    </aside>

                    <main className="lanyard-content">
                        <header className="lanyard-header">
                            <div className="lanyard-title">
                                <span className="lanyard-kicker">
                                    GINA'S JOURNEY
                                </span>

                                <h1>
                                    beyond the screen.
                                </h1>
                            </div>

                            <span className="lanyard-date">
                                2022
                                <br />
                                —
                                <br />
                                2023
                            </span>
                        </header>

                        <div className="lanyard-intro">
                            <p>
                                Not everything I've learned happened behind
                                a screen. These are some of the experiences
                                that became part of my journey.
                            </p>

                            <span>
                                MODELING
                                <br />
                                & BEAUTY
                            </span>
                        </div>

                        <div className="lanyard-experiences">
                            {experiences.map((experience, index) => (
                                <motion.article
                                    key={`${experience.title}-${experience.year}`}
                                    className="lanyard-experience"
                                    initial={{
                                        opacity: 0,
                                        x: 25
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0
                                    }}
                                    transition={{
                                        delay: 0.15 + index * 0.1,
                                        duration: 0.35
                                    }}
                                >
                                    <div className="lanyard-experience-number">
                                        {experience.number}
                                    </div>

                                    <div className="lanyard-experience-body">
                                        <span>{experience.category}</span>

                                        <h2>{experience.title}</h2>

                                        <p>{experience.text}</p>
                                    </div>

                                    <strong className="lanyard-experience-year">
                                        {experience.year}
                                    </strong>
                                </motion.article>
                            ))}
                        </div>

                        <div className="lanyard-note">
                            <span>LITTLE REMINDER</span>

                            <p>
                                Every experience leaves something behind —
                                confidence, stories, and a slightly stronger
                                version of yourself.
                            </p>

                            <strong>— gina</strong>
                        </div>

                        <footer className="lanyard-footer">
                            <span>MODELING & BEAUTY JOURNEY</span>
                            <span>SELECTED MEMORIES</span>
                        </footer>
                    </main>
                </div>
            </motion.div>
        </motion.div>
    );
}