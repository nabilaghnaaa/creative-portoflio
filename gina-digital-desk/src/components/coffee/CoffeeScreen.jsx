import { motion } from "motion/react";
import "./coffee.css";

export default function CoffeeScreen({ onClose }) {
    return (
        <motion.div
            className="coffee-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <motion.div
                className="coffee-scrapbook"
                initial={{
                    opacity: 0,
                    scale: 0.92,
                    y: 25,
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
                <span className="coffee-tape coffee-tape-left" />
                <span className="coffee-tape coffee-tape-right" />

                <button
                    type="button"
                    className="coffee-close"
                    onClick={onClose}
                    aria-label="Close coffee scrapbook"
                >
                    ×
                </button>

                <header className="coffee-header">
                    <div>
                        <span className="coffee-kicker">
                            GINA'S LITTLE PAUSE
                        </span>

                        <h1>
                            coffee,
                            <em>then code.</em>
                        </h1>
                    </div>

                    <span className="coffee-number">
                        03
                    </span>
                </header>

                <div className="coffee-intro">
                    <p>
                        A tiny pause between deadlines,
                        ideas, and lines of code. Some days,
                        a cup of coffee is all I need to start
                        again.
                    </p>

                    <span className="coffee-intro-note">
                        little rituals
                        <br />
                        behind the screen
                    </span>
                </div>

                <div className="coffee-content">
                    <motion.div
                        className="coffee-polaroid"
                        initial={{
                            opacity: 0,
                            x: -20,
                            rotate: -6
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            rotate: -3
                        }}
                        transition={{
                            delay: 0.15,
                            duration: 0.4
                        }}
                    >
                        <div className="coffee-photo">
                            <img
                                src="/assets/coffee/coffee.webp"
                                alt="Coffee"
                            />
                        </div>

                        <p className="coffee-polaroid-caption">
                            one cup.
                            <br />
                            <em>one more idea.</em>
                        </p>
                    </motion.div>

                    <motion.div
                        className="coffee-note"
                        initial={{
                            opacity: 0,
                            x: 20,
                            rotate: 4
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            rotate: 1.5
                        }}
                        transition={{
                            delay: 0.25,
                            duration: 0.4
                        }}
                    >
                        <span className="coffee-note-label">
                            little reminder
                        </span>

                        <h2>
                            slow down.
                            <br />
                            sip. create.
                        </h2>

                        <p>
                            Not every productive moment has
                            to look busy. Sometimes the best
                            ideas arrive somewhere between the
                            first sip and the next line of code.
                        </p>

                        <span className="coffee-note-signature">
                            — gina
                        </span>
                    </motion.div>
                </div>

                <footer className="coffee-footer">
                    <span>
                        coffee break
                    </span>

                    <span>
                        somewhere between code & calm
                    </span>
                </footer>
            </motion.div>
        </motion.div>
    );
}