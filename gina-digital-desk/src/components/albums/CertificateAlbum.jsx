import { motion } from "motion/react";
import certificates from "../../data/certificates";

export default function CertificateAlbum({
    onOpenCertificate,
    onSeeAll
}) {
    const previewCertificates = certificates.slice(0, 3);

    return (
        <motion.div
            className="certificate-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <header className="certificate-header">
                <div>
                    <span className="certificate-kicker">
                        GINA'S COLLECTION
                    </span>

                    <h1>
                        little achievements.
                    </h1>
                </div>

                <span className="certificate-number">
                    02
                </span>
            </header>

            <div className="album-line" />

            <div className="certificate-intro">
                <p>
                    Things I've learned, competitions I've
                    joined, and little milestones that remind
                    me how far I've come.
                </p>

                <span>
                    a collection of certificates & memories
                </span>
            </div>

            <div className="certificate-grid">
                {previewCertificates.map((certificate, index) => (
                    <motion.button
                        key={certificate.id}
                        type="button"
                        className={`certificate-card certificate-card-${index + 1}`}
                        onClick={() =>
                            onOpenCertificate(index)
                        }
                        whileHover={{
                            y: -8,
                            rotate: 0,
                            scale: 1.02
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 18
                        }}
                    >
                        <div className="certificate-image">
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                            />
                        </div>

                        <div className="certificate-info">
                            <strong>
                                {certificate.title}
                            </strong>

                            <span>
                                {certificate.organization}
                            </span>

                            <small>
                                {certificate.year}
                            </small>
                        </div>
                    </motion.button>
                ))}
            </div>

            <div className="certificate-note">
                <span>little reminder</span>

                <p>
                    "A certificate is nice,
                    but what I really keep is
                    the experience behind it."
                </p>

                <small>— gina</small>
            </div>

            <button
                type="button"
                className="certificate-see-all"
                onClick={onSeeAll}
            >
                see all certificates →
            </button>

            <footer className="album-footer">
                <span>
                    certificate archive
                </span>

                <span>
                    click a certificate to view
                </span>
            </footer>
        </motion.div>
    );
}