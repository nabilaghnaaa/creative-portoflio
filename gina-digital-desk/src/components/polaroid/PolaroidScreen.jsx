import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import "./polaroid.css";

const memories = [
    {
        id: 1,
        image: "/assets/polaroid/photo-01.webp",
        category: "friends",
        title: "people I met",
        text: "Some of the best memories came from simply being around good people."
    },
    {
        id: 2,
        image: "/assets/polaroid/photo-02.webp",
        category: "projects",
        title: "things we built",
        text: "Working together, sharing ideas, solving problems, and turning small ideas into something real."
    },
    {
        id: 3,
        image: "/assets/polaroid/photo-03.webp",
        category: "organization",
        title: "growing together",
        text: "Organizations taught me that growth is not always something you do alone."
    },
    {
        id: 4,
        image: "/assets/polaroid/photo-04.webp",
        category: "events",
        title: "moments in between",
        text: "The busy days, the little conversations, and everything that happened between the plans."
    },
    {
        id: 5,
        image: "/assets/polaroid/photo-05.webp",
        category: "competition",
        title: "showing up",
        text: "Competitions taught me to try, learn, make mistakes, and show up again."
    },
    {
        id: 6,
        image: "/assets/polaroid/photo-06.webp",
        category: "committee",
        title: "behind the scenes",
        text: "There is always a story behind every event — and usually a lot of people making it happen."
    }
];

const categories = ["all", "friends", "projects", "organization", "events", "competition", "committee"];

export default function PolaroidScreen({ onClose }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedMemory, setSelectedMemory] = useState(null);

    const filteredMemories = activeCategory === "all"
        ? memories
        : memories.filter((memory) => memory.category === activeCategory);

    return (
        <motion.div
            className="polaroid-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <motion.div
                className="polaroid-window"
                initial={{ opacity: 0, scale: 0.94, y: 25, rotate: -0.6 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 180,
                    damping: 20
                }}
            >
                <button
                    type="button"
                    className="polaroid-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <div className="polaroid-tape polaroid-tape-left" />
                <div className="polaroid-tape polaroid-tape-right" />

                <header className="polaroid-header">
                    <div className="polaroid-header-main">
                        <span className="polaroid-kicker">06 / SOCIAL ARCHIVE</span>
                        <h1>
                            people,
                            <br />
                            <em>places & memories.</em>
                        </h1>
                        <p>
                            A little collection of the people, projects,
                            organizations, events, and moments that became
                            part of my journey.
                        </p>
                    </div>

                    <div className="polaroid-header-side">
                        <span>REGINA RANA NABILA</span>
                        <strong>PEOPLE<br />& STORIES</strong>
                    </div>
                </header>

                <div className="polaroid-divider" />

                <section className="polaroid-intro">
                    <div className="polaroid-intro-number">01</div>

                    <div className="polaroid-intro-title">
                        <span>A LITTLE SOCIAL ARCHIVE</span>
                        <h2>
                            life feels better
                            <br />
                            <em>when shared.</em>
                        </h2>
                    </div>

                    <p>
                        I love being around people — working on projects,
                        joining organizations, helping with events, competing,
                        learning, and creating memories along the way.
                    </p>
                </section>

                <nav className="polaroid-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={activeCategory === category ? "active" : ""}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </nav>

                <section className="polaroid-gallery">
                    {filteredMemories.map((memory, index) => (
                        <motion.button
                            key={memory.id}
                            type="button"
                            className={`polaroid-memory polaroid-memory-${index + 1}`}
                            initial={{ opacity: 0, y: 18, rotate: index % 2 === 0 ? -2 : 2 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                rotate: 0,
                                scale: 1.035
                            }}
                            transition={{
                                duration: 0.35,
                                delay: index * 0.06
                            }}
                            onClick={() => setSelectedMemory(memory)}
                        >
                            <div className="polaroid-photo">
                                <img
                                    src={memory.image}
                                    alt={memory.title}
                                    draggable="false"
                                />
                            </div>

                            <div className="polaroid-caption">
                                <span>{memory.category}</span>
                                <strong>{memory.title}</strong>
                                <small>click to remember ↗</small>
                            </div>
                        </motion.button>
                    ))}
                </section>

                <section className="polaroid-note">
                    <div className="polaroid-note-star">✦</div>
                    <div>
                        <span>NOTE TO SELF</span>
                        <p>
                            Not every important moment has to become a
                            milestone. Some are simply memories worth keeping.
                        </p>
                    </div>
                    <strong>— gina</strong>
                </section>

                <footer className="polaroid-footer">
                    <span>PEOPLE / PROJECTS / MEMORIES</span>
                    <span>06 / SOCIAL ARCHIVE</span>
                    <span>2026</span>
                </footer>

                <AnimatePresence>
                    {selectedMemory && (
                        <motion.div
                            className="polaroid-detail-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMemory(null)}
                        >
                            <motion.div
                                className="polaroid-detail"
                                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.92, rotate: 2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 20
                                }}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    className="polaroid-detail-close"
                                    onClick={() => setSelectedMemory(null)}
                                >
                                    ×
                                </button>

                                <div className="polaroid-detail-image">
                                    <img
                                        src={selectedMemory.image}
                                        alt={selectedMemory.title}
                                        draggable="false"
                                    />
                                </div>

                                <div className="polaroid-detail-content">
                                    <span>{selectedMemory.category}</span>
                                    <h2>{selectedMemory.title}</h2>
                                    <p>{selectedMemory.text}</p>
                                    <small>one of the memories I keep.</small>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}