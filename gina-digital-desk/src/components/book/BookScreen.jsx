import React from "react";
import { AnimatePresence, motion } from "motion/react";
import "./book.css";

const techStack = [
    {
        name: "JavaScript",
        category: "Development",
        description: "Interactive web experiences",
        icon: "https://cdn.simpleicons.org/javascript"
    },
    {
        name: "React",
        category: "Frontend",
        description: "Modern interfaces",
        icon: "https://cdn.simpleicons.org/react"
    },
    {
        name: "HTML5",
        category: "Web",
        description: "Structure & semantics",
        icon: "https://cdn.simpleicons.org/html5"
    },
    {
        name: "CSS3",
        category: "Web",
        description: "Styling & animation",
        icon: "https://cdn.simpleicons.org/css3"
    },
    {
        name: "Figma",
        category: "Design",
        description: "UI/UX & prototyping",
        icon: "https://cdn.simpleicons.org/figma"
    },
    {
        name: "Canva",
        category: "Design",
        description: "Visual design & content",
        icon: "https://cdn.simpleicons.org/canva"
    },
    {
        name: "Microsoft",
        category: "Productivity",
        description: "Digital productivity tools",
        icon: "https://cdn.simpleicons.org/microsoft"
    },
    {
        name: "Git",
        category: "Development",
        description: "Version control",
        icon: "https://cdn.simpleicons.org/git"
    },
    {
        name: "GitHub",
        category: "Development",
        description: "Code & collaboration",
        icon: "https://cdn.simpleicons.org/github"
    },
    {
        name: "VS Code",
        category: "Development",
        description: "Code editor",
        icon: "https://cdn.simpleicons.org/visualstudiocode"
    },
    {
        name: "Node.js",
        category: "Backend",
        description: "JavaScript runtime",
        icon: "https://cdn.simpleicons.org/nodedotjs"
    },
    {
        name: "MySQL",
        category: "Database",
        description: "Relational database",
        icon: "https://cdn.simpleicons.org/mysql"
    }
];

const ITEMS_PER_PAGE = 6;

export default function BookScreen({ onClose }) {
    const [page, setPage] = React.useState(0);

    const totalPages = Math.ceil(techStack.length / ITEMS_PER_PAGE);

    const visibleTech = techStack.slice(
        page * ITEMS_PER_PAGE,
        (page + 1) * ITEMS_PER_PAGE
    );

    const nextPage = () => {
        setPage((current) => Math.min(current + 1, totalPages - 1));
    };

    const previousPage = () => {
        setPage((current) => Math.max(current - 1, 0));
    };

    return (
        <motion.div
            className="book-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="book-window"
                initial={{ opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 180,
                    damping: 20
                }}
            >
                <div className="book-spine" />

                <button
                    className="book-close"
                    onClick={onClose}
                    aria-label="Close book"
                    type="button"
                >
                    ×
                </button>

                <div className="book-page book-page-left">
                    <div className="book-topline">
                        <span>DIGITAL ARCHIVE</span>
                        <span>REGINA RANA NABILA</span>
                        <span>2026</span>
                    </div>

                    <div className="book-left-content">
                        <span className="book-section-number">01</span>

                        <span className="book-kicker">
                            A COLLECTION OF
                        </span>

                        <h1 className="book-main-title">
                            things I
                            <br />
                            <em>create with.</em>
                        </h1>

                        <div className="book-title-line" />

                        <div className="book-description-row">
                            <p>
                                A collection of the tools that live behind
                                my screen — 
                                < br /> 
                                the things I use to design,
                                build, experiment,
                                < br /> 
                                and turn ideas into
                                something real.
                            </p>

                            <div className="book-side-words">
                                <span>CODE.</span>
                                <span>DESIGN.</span>
                                <span>CREATE.</span>
                            </div>
                        </div>
                        
                        <div className="book-showcase">
                        <div className="book-left-showcase">
                            <div className="book-showcase-label">
                                <span>MY CREATIVE DESK</span>
                                <span>SELECTED TOOLS</span>
                            </div>

                            <div className="book-showcase-content">
                                <div className="book-tool-orbit">
                                    <div className="book-orbit-ring" />
                                    <div className="book-orbit-dot book-orbit-dot-one" />
                                    <div className="book-orbit-dot book-orbit-dot-two" />
                                    <div className="book-orbit-center">
                                        <span>✦</span>
                                    </div>
                                </div>
                                
                                <div className="book-showcase-text">
                                    <span>THE WAY I WORK</span>
                                    <h2>
                                        imagine.
                                        <br />
                                        <em>build.</em>
                                        <br />
                                        refine.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="book-left-stats">
                            <div>
                                <strong>12</strong>
                                <span>TOOLS</span>
                            </div>

                            <div>
                                <strong>04</strong>
                                <span>FIELDS</span>
                            </div>

                            <div>
                                <strong>∞</strong>
                                <span>IDEAS</span>
                            </div>
                        </div>

                        <div className="book-left-note">
                            <span>NOTE TO SELF</span>
                            <p>
                                Keep learning.
                                <br />
                                Keep making.
                                <br />
                                Keep finding new ways to turn an idea into something people can experience.
                            </p>
                            <em>— gina</em>
                        </div>
                    </div>

                    <div className="book-page-footer">
                        <span>REGINA RANA NABILA</span>
                        <span>01 / 02</span>
                    </div>
                </div>

                <div className="book-page book-page-right">
                    <div className="book-right-header">
                        <div>
                            <span className="book-right-kicker">
                                TOOLS & TECHNOLOGIES
                            </span>

                            <h2>
                                what I use
                                <br />
                                <em>behind the screen.</em>
                            </h2>
                        </div>

                        <div className="book-page-number">
                            <span>PAGE</span>
                            <strong>
                                {String(page + 1).padStart(2, "0")}
                            </strong>
                            <small>/ 02</small>
                        </div>
                    </div>

                    <div className="book-right-divider" />

                    <div className="book-tech-heading">
                        <div>
                            <span>SELECTED TOOLKIT</span>
                            <strong>
                                {String(page * ITEMS_PER_PAGE + 1).padStart(2, "0")} —{" "}
                                {String(
                                    Math.min(
                                        (page + 1) * ITEMS_PER_PAGE,
                                        techStack.length
                                    )
                                ).padStart(2, "0")}
                            </strong>
                        </div>

                        <p>
                            Hover over a tool
                            <br />
                            to explore the collection.
                        </p>
                    </div>

                    <div className="book-tech-grid">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={page}
                                className="book-tech-grid-inner"
                                initial={{ opacity: 0, x: page === 0 ? 25 : -25 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: page === 0 ? -25 : 25 }}
                                transition={{ duration: 0.28 }}
                            >
                                {visibleTech.map((tech, index) => {
                                    const actualIndex =
                                        page * ITEMS_PER_PAGE + index;

                                    return (
                                        <motion.article
                                            key={tech.name}
                                            className="book-tech-card"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: index * 0.045,
                                                duration: 0.3
                                            }}
                                            whileHover={{
                                                y: -4,
                                                scale: 1.02
                                            }}
                                        >
                                            <div className="book-tech-card-number">
                                                {String(actualIndex + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>

                                            <div className="book-tech-icon">
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    draggable="false"
                                                />
                                            </div>

                                            <div className="book-tech-info">
                                                <span>{tech.category}</span>
                                                <h3>{tech.name}</h3>
                                                <p>{tech.description}</p>
                                            </div>

                                            <span className="book-tech-arrow">
                                                ↗
                                            </span>
                                        </motion.article>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="book-right-bottom">
                        <div className="book-mini-note">
                            <span>NOTE TO SELF</span>
                            <p>
                                The tools keep changing.
                                <br />
                                The curiosity doesn't.
                            </p>
                        </div>

                        <div className="book-navigation">
                            <button
                                type="button"
                                className={`book-nav-button ${
                                    page === 0 ? "is-disabled" : ""
                                }`}
                                onClick={previousPage}
                                disabled={page === 0}
                            >
                                <span>←</span>
                                <strong>PREV</strong>
                            </button>

                            <div className="book-pagination">
                                <span className={page === 0 ? "active" : ""}>
                                    01
                                </span>
                                <i />
                                <span className={page === 1 ? "active" : ""}>
                                    02
                                </span>
                            </div>

                            <button
                                type="button"
                                className={`book-nav-button ${
                                    page === totalPages - 1 ? "is-disabled" : ""
                                }`}
                                onClick={nextPage}
                                disabled={page === totalPages - 1}
                            >
                                <strong>NEXT</strong>
                                <span>→</span>
                            </button>
                        </div>
                    </div>

                    <div className="book-right-footer">
                        <span>DIGITAL / CREATIVE / TECH</span>
                        <span>KEEP CREATING.</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}