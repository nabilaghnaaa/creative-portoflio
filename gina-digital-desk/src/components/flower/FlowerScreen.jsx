import { motion } from "motion/react";
import "./flower.css";

export default function FlowerScreen({ onClose }) {
    return (
        <motion.div
            className="flower-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <motion.div
                className="flower-book"
                initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 25,
                    rotate: -0.8
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: 0
                }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 180,
                    damping: 20
                }}
            >
                <button
                    type="button"
                    className="flower-close"
                    onClick={onClose}
                    aria-label="Close flower scrapbook"
                >
                    ×
                </button>

                <div className="flower-tape flower-tape-top" />
                <div className="flower-tape flower-tape-photo" />

                <header className="flower-header">
                    <div className="flower-page-number">
                        <span>05</span>
                        <small>
                            PERSONAL
                            <br />
                            MEMORY
                        </small>
                    </div>

                    <div className="flower-header-title">
                        <span className="flower-kicker">
                            A LITTLE MEMORY FROM MALANG
                        </span>

                        <h1>
                            the flower that taught me
                            <br />
                            <em>to keep going.</em>
                        </h1>
                    </div>

                    <div className="flower-year">
                        MALANG
                        <strong>2023</strong>
                    </div>
                </header>

                <div className="flower-rule" />

                <main className="flower-content">
                    <section className="flower-left">
                        <div className="flower-story-label">
                            <span>01</span>
                            <p>
                                A flower
                                <br />
                                from Malang
                            </p>
                        </div>

                        <div className="flower-photo-card">
                            <div className="flower-photo-tape" />

                            <img
                                src="/assets/flower/malang.webp"
                                alt="Gina in Malang"
                            />

                            <div className="flower-photo-caption">
                                <span>malang, 2023</span>
                                <strong>a memory I kept.</strong>
                            </div>
                        </div>

                        <div className="flower-handwritten">
                            <span>one little reminder</span>
                            <strong>
                                some things are meant
                                <br />
                                to stay.
                            </strong>
                        </div>
                    </section>

                    <section className="flower-right">
                        <div className="flower-intro">
                            <span className="flower-section-number">
                                02
                            </span>

                            <div>
                                <span className="flower-small-title">
                                    WHY THIS FLOWER MATTERS
                                </span>

                                <p>
                                    I got this Edelweiss in Malang.
                                    It may look like a simple flower,
                                    but somehow it  <br /> became one of the
                                    memories I carry with me.
                                </p>
                            </div>
                        </div>

                        <div className="flower-main-memory">
                            <div className="flower-flower-paper">
                                <span className="flower-paper-word">
                                    edelweiss
                                </span>

                                <img
                                    src="/assets/flower/edelweis.webp"
                                    alt="Edelweiss flower"
                                />

                                <span className="flower-flower-note">
                                    a flower that
                                    <br />
                                    refuses to fade
                                </span>
                            </div>

                            <div className="flower-quote">
                                <span>03 — THE THING IT TAUGHT ME</span>

                                <blockquote>
                                    “Even when no one <br /> is there
                                    to take care <br />  of it,
                                    <em> it keeps living.</em>”
                                </blockquote>
                            </div>
                        </div>

                        <div className="flower-message">
                            <span className="flower-message-label">
                                A NOTE TO MYSELF
                            </span>

                            <p>
                                Edelweiss reminded me that strength
                                does not always have to be loud.
                                Sometimes,<br /> surviving quietly is already
                                an act of courage.
                            </p>

                            <p>
                                It grows in places where things are not
                                always easy.  <br /> It stays beautiful even
                                when nobody is watching.
                            </p>

                            <strong>
                                So maybe I don't need a reason to give up.
                                <br />
                                Maybe I just need to keep growing.
                            </strong>
                        </div>
                    </section>
                </main>

                <footer className="flower-footer">
                    <span>MEMORIES FROM THE WAY</span>

                    <span className="flower-footer-line" />

                    <span>
                        MALANG · EDELWEISS · 2023
                    </span>
                </footer>

                <div className="flower-sticker">
                    <span>keep</span>
                    <strong>going.</strong>
                </div>
            </motion.div>
        </motion.div>
    );
}