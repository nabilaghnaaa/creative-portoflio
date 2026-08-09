import { motion } from "motion/react";
import travels from "../../data/travels";

export default function TravelAlbum({ onBack, onOpenPhoto }) {
    return (
        <motion.div
            className="travel-album-page"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
        >
            <header className="album-header">
                <div>
                    <span className="album-kicker">GINA'S ARCHIVE</span>
                    <h1>
                        little adventures.
                    </h1>
                </div>

                <div className="album-number">01</div>
            </header>

            <div className="album-line" />

            <div className="album-top-row">
                <p className="album-intro">
                    Places I've been, little moments I kept,
                    and memories that somehow always end up
                    in my camera roll.
                </p>

                <button
                    type="button"
                    className="album-back"
                    onClick={onBack}
                >
                    ← back
                </button>
            </div>

            <div className="travel-gallery">
                {travels.map((travel, index) => (
                    <motion.button
                        key={travel.id}
                        type="button"
                        className={`travel-card travel-card-${index + 1}`}
                        onClick={() => onOpenPhoto(index)}
                        whileHover={{
                            y: -7,
                            rotate: 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                    >
                        <div className="travel-card-image">
                            <img
                                src={travel.image}
                                alt={travel.place}
                            />
                        </div>

                        <div className="travel-card-info">
                            <div>
                                <strong>{travel.place}</strong>
                                <span>{travel.location}</span>
                            </div>

                            <small>{travel.year}</small>
                        </div>
                    </motion.button>
                ))}
            </div>

            <div className="travel-album-note">
                <span>little note</span>
                <p>
                    "I don't always remember every detail,
                    but somehow a photo brings the whole
                    feeling back."
                </p>
                <small>— gina</small>
            </div>

            <footer className="album-footer">
                <span>travel diary</span>
                <span>click a photo to open it</span>
            </footer>
        </motion.div>
    );
}