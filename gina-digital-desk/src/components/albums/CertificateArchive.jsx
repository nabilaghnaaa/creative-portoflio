import { useState } from "react";
import { motion } from "motion/react";
import certificates from "../../data/certificates";

const categories = [
    "all",
    "course",
    "competition",
    "achievement"
];

export default function CertificateArchive({
    onBack,
    onOpenCertificate
}) {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCertificates =
        activeCategory === "all"
            ? certificates
            : certificates.filter(
                (certificate) =>
                    certificate.category === activeCategory
            );

    return (
        <motion.div
            className="certificate-archive"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
        >
            <header className="archive-header">
                <div>
                    <span className="archive-kicker">
                        GINA'S ARCHIVE
                    </span>

                    <h1>
                        all the little wins.
                    </h1>
                </div>

                <div className="archive-header-right">
                    <span className="archive-number">
                        02 / ∞
                    </span>

                    <button
                        type="button"
                        className="archive-back"
                        onClick={onBack}
                    >
                        ← back
                    </button>
                </div>
            </header>

            <div className="album-line" />

            <div className="archive-intro">
                <p>
                    A little archive of things I've learned,
                    joined, completed, and collected along
                    the way.
                </p>

                <span>
                    {certificates.length} certificates
                </span>
            </div>

            <div className="certificate-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={
                            activeCategory === category
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setActiveCategory(category)
                        }
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="archive-grid">
                {filteredCertificates.map(
                    (certificate, index) => (
                        <motion.button
                            key={certificate.id}
                            type="button"
                            className="archive-card"
                            onClick={() =>
                                onOpenCertificate(
                                    certificates.findIndex(
                                        (item) =>
                                            item.id ===
                                            certificate.id
                                    )
                                )
                            }
                            initial={{
                                opacity: 0,
                                y: 15
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.3
                            }}
                            whileHover={{
                                y: -7,
                                rotate: 0
                            }}
                        >
                            <div className="archive-card-image">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                />
                            </div>

                            <div className="archive-card-info">
                                <div>
                                    <strong>
                                        {certificate.title}
                                    </strong>

                                    <span>
                                        {certificate.organization}
                                    </span>
                                </div>

                                <small>
                                    {certificate.year}
                                </small>
                            </div>
                        </motion.button>
                    )
                )}
            </div>

            {filteredCertificates.length === 0 && (
                <div className="archive-empty">
                    <span>nothing here yet.</span>
                    <p>
                        Maybe this collection is still
                        growing.
                    </p>
                </div>
            )}

            <footer className="album-footer">
                <span>
                    certificate archive
                </span>

                <span>
                    every little milestone counts
                </span>
            </footer>
        </motion.div>
    );
}