import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import "./tablet.css";

const works = [
    {
        id: 1,
        title: "Visual Campaign",
        category: "Poster",
        type: "POSTER DESIGN",
        year: "2026",
        image: "/assets/tablet/poster-1.webp",
        description: "A visual exploration built around composition, typography, and a strong visual identity."
    },
    {
        id: 2,
        title: "Creative Content",
        category: "Content",
        type: "SOCIAL CONTENT",
        year: "2026",
        image: "/assets/tablet/content-1.webp",
        description: "Digital content created to communicate an idea through visual storytelling and engaging layouts."
    },
    {
        id: 3,
        title: "Editorial Poster",
        category: "Poster",
        type: "POSTER DESIGN",
        year: "2025",
        image: "/assets/tablet/poster-2.webp",
        description: "An experimental poster combining typography, imagery, and editorial-inspired composition."
    },
    {
        id: 4,
        title: "Video Direction",
        category: "Video",
        type: "VIDEO EDITING",
        year: "2025",
        image: "/assets/tablet/editing-1.webp",
        description: "A visual project focused on rhythm, transitions, storytelling, and cinematic composition."
    },
    {
        id: 5,
        title: "Digital Campaign",
        category: "Content",
        type: "CONTENT DESIGN",
        year: "2025",
        image: "/assets/tablet/content-2.webp",
        description: "A collection of digital visuals created for communication, promotion, and social media."
    },
    {
        id: 6,
        title: "Creative Edit",
        category: "Video",
        type: "VIDEO EDITING",
        year: "2024",
        image: "/assets/tablet/editing-2.webp",
        description: "An editing project exploring pacing, visual atmosphere, transitions, and storytelling."
    }
];

const categories = [
    "All",
    "Poster",
    "Content",
    "Video"
];

export default function TabletScreen({ onClose }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredWorks = useMemo(() => {
        if (activeCategory === "All") {
            return works;
        }

        return works.filter(
            (work) => work.category === activeCategory
        );
    }, [activeCategory]);

    return (
        <motion.div
            className="tablet-screen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="tablet-screen-window"
                initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
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
                    className="tablet-screen-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <div className="tablet-screen-tape tablet-screen-tape-one" />
                <div className="tablet-screen-tape tablet-screen-tape-two" />

                <header className="tablet-screen-header">
                    <div className="tablet-screen-heading">
                        <span className="tablet-screen-kicker">
                            06 / CREATIVE ARCHIVE
                        </span>

                        <h1>
                            things I
                            <br />
                            <em>make visually.</em>
                        </h1>

                        <p>
                            A collection of posters, digital content,
                            edits, and little visual experiments that
                            became part of my creative journey.
                        </p>
                    </div>

                    <div className="tablet-screen-index">
                        <span>SELECTED</span>
                        <strong>{String(filteredWorks.length).padStart(2, "0")}</strong>
                        <small>creative works</small>
                    </div>
                </header>

                <div className="tablet-screen-divider" />

                <section className="tablet-screen-intro">
                    <div className="tablet-screen-intro-number">
                        01
                    </div>

                    <div className="tablet-screen-intro-title">
                        <span>MY CREATIVE DESK</span>

                        <h2>
                            Ideas become <em>something visible.</em>
                        </h2>
                    </div>

                    <p>
                        Design, editing, content, and visual experiments.
                        Different formats, one thing in common:
                        turning an idea into something people can see.
                    </p>
                </section>

                <nav className="tablet-screen-filter">
                    <span className="tablet-filter-label">
                        EXPLORE
                    </span>

                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={
                                activeCategory === category
                                    ? "tablet-filter-button tablet-filter-active"
                                    : "tablet-filter-button"
                            }
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                            <span>
                                {category === "All"
                                    ? works.length
                                    : works.filter(
                                        (work) =>
                                            work.category === category
                                    ).length}
                            </span>
                        </button>
                    ))}
                </nav>

                <AnimatePresence mode="wait">
                    <motion.section
                        key={activeCategory}
                        className="tablet-work-grid"
                        initial={{
                            opacity: 0,
                            y: 12
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            y: -8
                        }}
                        transition={{
                            duration: 0.25
                        }}
                    >
                        {filteredWorks.map((work, index) => (
                            <motion.article
                                key={work.id}
                                className="tablet-work-card"
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    delay: index * 0.07,
                                    duration: 0.35
                                }}
                                whileHover={{
                                    y: -7
                                }}
                            >
                                <div className="tablet-work-image">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        draggable="false"
                                    />

                                    <div className="tablet-work-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="tablet-work-overlay">
                                        <span>VIEW WORK</span>
                                        <strong>↗</strong>
                                    </div>
                                </div>

                                <div className="tablet-work-info">
                                    <div>
                                        <span>{work.type}</span>
                                        <h3>{work.title}</h3>
                                    </div>

                                    <strong>{work.year}</strong>
                                </div>

                                <p>
                                    {work.description}
                                </p>
                            </motion.article>
                        ))}
                    </motion.section>
                </AnimatePresence>

                <section className="tablet-screen-note">
                    <div className="tablet-note-symbol">
                        ✦
                    </div>

                    <div>
                        <span>
                            CREATIVE NOTE
                        </span>

                        <p>
                            I like making things that feel alive —
                            something that catches attention, tells
                            a story, or simply makes an idea easier
                            to experience.
                        </p>
                    </div>

                    <strong>
                        — gina
                    </strong>
                </section>

                <footer className="tablet-screen-footer">
                    <span>
                        REGINA RANA NABILA
                    </span>

                    <span>
                        DESIGN / CONTENT / EDITING
                    </span>

                    <span>
                        2026
                    </span>
                </footer>
            </motion.div>
        </motion.div>
    );
}