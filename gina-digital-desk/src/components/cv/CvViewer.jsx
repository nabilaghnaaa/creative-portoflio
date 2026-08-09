import { motion } from "motion/react";

export default function CvViewer({ onClose }) {
    return (
        <motion.div
            className="cv-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="cv-paper"
                initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 25,
                    rotate: -5
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22
                }}
            >
                <button
                    type="button"
                    className="cv-close"
                    onClick={onClose}
                    aria-label="Close CV"
                >
                    ×
                </button>

                <header className="cv-header">
                    <div>
                        <span className="cv-kicker">
                            GINA'S CV
                        </span>

                        <h1>
                            Regina Rana Nabila.
                        </h1>
                    </div>

                    <div className="cv-header-info">
                        <strong>
                            Frontend Developer
                        </strong>

                        <span>
                            UI/UX · Web · Creative
                        </span>
                    </div>
                </header>

                <section className="cv-intro">
                    <p>
                        Information Technology student
                        with an interest in frontend
                        development, UI/UX design, and
                        building digital experiences.
                    </p>

                    <div className="cv-contact">
                        <span>
                            Indonesia
                        </span>

                        <span>
                            Available for collaboration
                        </span>

                        <span>
                            Web Developer
                        </span>
                    </div>
                </section>

                <div className="cv-content">
                    <div>
                        <section className="cv-section">
                            <div className="cv-section-title">
                                <span>
                                    experience
                                </span>
                            </div>

                            <div className="cv-item">
                                <div className="cv-item-head">
                                    <strong>
                                        Frontend Developer
                                    </strong>

                                    <small>
                                        2026 — present
                                    </small>
                                </div>

                                <span>
                                    Professional Certification
                                    Information System
                                </span>

                                <p>
                                    Developing responsive
                                    interfaces and digital
                                    workflows for a web-based
                                    professional certification
                                    platform.
                                </p>
                            </div>

                            <div className="cv-item">
                                <div className="cv-item-head">
                                    <strong>
                                        Head Frontend Developer
                                    </strong>

                                    <small>
                                        2026
                                    </small>
                                </div>

                                <span>
                                    Mosque Information System
                                </span>

                                <p>
                                    Led frontend development
                                    and built responsive
                                    interfaces for mosque
                                    management modules.
                                </p>
                            </div>
                        </section>

                        <section className="cv-section">
                            <div className="cv-section-title">
                                <span>
                                    selected projects
                                </span>
                            </div>

                            <div className="cv-project">
                                <strong>
                                    Noyo Gimbal
                                </strong>

                                <span>
                                    Web
                                </span>
                            </div>

                            <div className="cv-project">
                                <strong>
                                    Professional Certification
                                    Information System
                                </strong>

                                <span>
                                    Web
                                </span>
                            </div>

                            <div className="cv-project">
                                <strong>
                                    Mosque Information System
                                </strong>

                                <span>
                                    Web
                                </span>
                            </div>
                        </section>
                    </div>

                    <div>
                        <section className="cv-section">
                            <div className="cv-section-title">
                                <span>
                                    skills
                                </span>
                            </div>

                            <div className="cv-skills">
                                <span className="cv-skill">
                                    React.js
                                </span>

                                <span className="cv-skill">
                                    JavaScript
                                </span>

                                <span className="cv-skill">
                                    HTML
                                </span>

                                <span className="cv-skill">
                                    CSS
                                </span>

                                <span className="cv-skill">
                                    Tailwind CSS
                                </span>

                                <span className="cv-skill">
                                    Node.js
                                </span>

                                <span className="cv-skill">
                                    Laravel
                                </span>

                                <span className="cv-skill">
                                    MySQL
                                </span>

                                <span className="cv-skill">
                                    UI/UX
                                </span>

                                <span className="cv-skill">
                                    Figma
                                </span>
                            </div>
                        </section>

                        <section className="cv-section">
                            <div className="cv-section-title">
                                <span>
                                    education
                                </span>
                            </div>

                            <div className="cv-item">
                                <div className="cv-item-head">
                                    <strong>
                                        Information Technology
                                    </strong>

                                    <small>
                                        Present
                                    </small>
                                </div>

                                <span>
                                    University
                                </span>
                            </div>
                        </section>
                    </div>
                </div>

                <footer className="cv-footer">
                    <span>
                        curriculum vitae
                    </span>

                    <a
                        href="/assets/cv/CV-Regina.pdf"
                        download="CV-Regina.pdf"
                        className="cv-download"
                    >
                        download cv →
                    </a>
                </footer>
            </motion.div>
        </motion.div>
    );
}