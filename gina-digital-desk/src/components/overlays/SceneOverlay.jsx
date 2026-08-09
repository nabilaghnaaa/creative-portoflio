import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDesk } from "../../context/DeskContext";
import TravelAlbum from "../albums/TravelAlbum";
import CertificateAlbum from "../albums/CertificateAlbum";
import CertificateArchive from "../albums/CertificateArchive";
import ImageViewer from "../common/ImageViewer";
import LaptopScreen from "../laptop/LaptopScreen";
import CvViewer from "../cv/CvViewer";
import PhoneScreen from "../phone/PhoneScreen";
import CoffeeScreen from "../coffee/CoffeeScreen";
import travels from "../../data/travels";
import certificates from "../../data/certificates";
import LanyardScreen from "../lanyard/LanyardScreen";
import FlowerScreen from "../flower/FlowerScreen";
import BookScreen from "../book/BookScreen";
import PolaroidScreen from "../polaroid/PolaroidScreen";
import TabletScreen from "../tablet/TabletScreen";

export default function SceneOverlay() {
    const { activeObject, closeObject } = useDesk();

    const [showAlbum, setShowAlbum] = useState(false);
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const [activePhoto, setActivePhoto] = useState(null);
    const [activeCertificate, setActiveCertificate] = useState(null);

    const handleClose = () => {
        setShowAlbum(false);
        setShowAllCertificates(false);
        setActivePhoto(null);
        setActiveCertificate(null);
        closeObject();
    };

    const openPhoto = (index) => {
        setActivePhoto(index);
    };

    const nextPhoto = () => {
        setActivePhoto((current) => {
            if (current === null) {
                return 0;
            }

            return (current + 1) % travels.length;
        });
    };

    const previousPhoto = () => {
        setActivePhoto((current) => {
            if (current === null) {
                return 0;
            }

            return (
                (current - 1 + travels.length) %
                travels.length
            );
        });
    };

    const openCertificate = (index) => {
        setActiveCertificate(index);
    };

    const nextCertificate = () => {
        setActiveCertificate((current) => {
            if (current === null) {
                return 0;
            }

            return (
                (current + 1) %
                certificates.length
            );
        });
    };

    const previousCertificate = () => {
        setActiveCertificate((current) => {
            if (current === null) {
                return 0;
            }

            return (
                (current - 1 + certificates.length) %
                certificates.length
            );
        });
    };

    return (
        <AnimatePresence>
            {activeObject && (
                <motion.div
                    className="scene-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    {/* ========================================
                        CAMERA
                    ======================================== */}

                    {activeObject === "camera" && (
                        <>
                            {!showAlbum ? (
                                <motion.div
                                    className="travel-album"
                                    initial={{
                                        opacity: 0,
                                        scale: 0.92,
                                        rotate: -2,
                                        y: 25
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        y: 0
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.95,
                                        rotate: 2,
                                        y: 20
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="album-close"
                                        onClick={handleClose}
                                        aria-label="Close travel diary"
                                    >
                                        ×
                                    </button>

                                    <CameraIntro
                                        onOpenAlbum={() =>
                                            setShowAlbum(true)
                                        }
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="travel-album"
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="album-close"
                                        onClick={handleClose}
                                        aria-label="Close travel diary"
                                    >
                                        ×
                                    </button>

                                    <TravelAlbum
                                        onBack={() =>
                                            setShowAlbum(false)
                                        }
                                        onOpenPhoto={openPhoto}
                                    />
                                </motion.div>
                            )}
                        </>
                    )}

                    {/* ========================================
                        MAP / CERTIFICATES
                    ======================================== */}

                    {activeObject === "map" && (
                        <motion.div
                            className="travel-album"
                            initial={{
                                opacity: 0,
                                scale: 0.94,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.4
                            }}
                        >
                            <button
                                type="button"
                                className="album-close"
                                onClick={handleClose}
                                aria-label="Close certificates"
                            >
                                ×
                            </button>

                            {!showAllCertificates ? (
                                <CertificateAlbum
                                    onOpenCertificate={
                                        openCertificate
                                    }
                                    onSeeAll={() =>
                                        setShowAllCertificates(
                                            true
                                        )
                                    }
                                />
                            ) : (
                                <CertificateArchive
                                    onBack={() =>
                                        setShowAllCertificates(
                                            false
                                        )
                                    }
                                    onOpenCertificate={
                                        openCertificate
                                    }
                                />
                            )}
                        </motion.div>
                    )}

                    {/* ========================================
                        LAPTOP / PROJECTS
                    ======================================== */}

                    {activeObject === "laptop" && (
                        <LaptopScreen
                            onClose={handleClose}
                        />
                    )}

                    {/* ========================================
                        CV / RESUME
                    ======================================== */}

                    {activeObject === "cv" && (
                        <CvViewer
                            onClose={handleClose}
                        />
                    )}

                    {/* ========================================
                        LANYARD
                    ======================================== */}

                    {activeObject === "lanyard" && (
                        <LanyardScreen
                            onClose={handleClose}
                        />
                    )}

                    {/* ========================================
                        BOOK PINK
                    ======================================== */}

                    {activeObject === "book" && (
                        <BookScreen onClose={closeObject} />
                    )}

                    {/* ========================================
                        FLOWER / EDELWEISS
                    ======================================== */}

                    {activeObject === "flower" && (
                        <FlowerScreen
                            onClose={handleClose}
                        />
                    )}

                    {/* ========================================
                        PHONE / CALL
                    ======================================== */}

                    {activeObject === "phone" && (
                        <PhoneScreen
                            onClose={handleClose}
                        />
                    )}

                    {/* ========================================
                        COFFEE / SCRAPBOOK
                    ======================================== */}

                    {activeObject === "coffee" && (
                        <CoffeeScreen
                            onClose={handleClose}
                        />
                    )}

                    {/* ========================================
                        TABLET
                    ======================================== */}

                    {activeObject === "tablet" && (
                        <TabletScreen onClose={closeObject} />
                    )}

                    {/* ========================================
                        TRAVEL PHOTO VIEWER
                    ======================================== */}

                    {activePhoto !== null && (
                        <ImageViewer
                            photos={travels}
                            activeIndex={activePhoto}
                            onClose={() =>
                                setActivePhoto(null)
                            }
                            onNext={nextPhoto}
                            onPrevious={previousPhoto}
                        />
                    )}

                     {/* ========================================
                        POLAROID PHOTO
                    ======================================== */}

                    {activeObject === "polaroid" && (
                        <PolaroidScreen onClose={closeObject} />
                    )}

                    {/* ========================================
                        CERTIFICATE VIEWER
                    ======================================== */}

                    {activeCertificate !== null && (
                        <CertificateViewer
                            certificates={certificates}
                            activeIndex={activeCertificate}
                            onClose={() =>
                                setActiveCertificate(null)
                            }
                            onNext={nextCertificate}
                            onPrevious={previousCertificate}
                        />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ========================================
   CAMERA INTRO
======================================== */

function CameraIntro({ onOpenAlbum }) {
    return (
        <div className="camera-content">
            <header className="album-header">
                <div>
                    <span className="album-kicker">
                        GINA'S ARCHIVE
                    </span>

                    <h1>
                        little adventures.
                    </h1>
                </div>

                <div className="album-number">
                    01
                </div>
            </header>

            <div className="album-line" />

            <p className="album-intro">
                Places I've been, little moments I kept,
                and memories that somehow always end up
                in my camera roll.
            </p>

            <div className="camera-intro-layout">
                <div className="camera-polaroid">
                    <div className="camera-polaroid-image">
                        <span>travel</span>
                    </div>

                    <p>
                        memories,
                        <br />
                        collected.
                    </p>
                </div>

                <div className="camera-intro-text">
                    <span className="small-label">
                        from my camera roll
                    </span>

                    <h2>
                        A little collection
                        of places I've been.
                    </h2>

                    <p>
                        From spontaneous trips to familiar
                        places, these are some of the moments
                        I decided to keep.
                    </p>

                    <button
                        type="button"
                        className="album-open-button"
                        onClick={onOpenAlbum}
                    >
                        open travel diary →
                    </button>
                </div>
            </div>

            <footer className="album-footer">
                <span>travel diary</span>
                <span>gina's little archive</span>
            </footer>
        </div>
    );
}

/* ========================================
   CERTIFICATE VIEWER
======================================== */

function CertificateViewer({
    certificates,
    activeIndex,
    onClose,
    onNext,
    onPrevious
}) {
    const certificate = certificates[activeIndex];

    if (!certificate) {
        return null;
    }

    return (
        <motion.div
            className="certificate-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <button
                type="button"
                className="certificate-viewer-close"
                onClick={onClose}
                aria-label="Close certificate"
            >
                ×
            </button>

            <button
                type="button"
                className="certificate-viewer-arrow certificate-viewer-prev"
                onClick={onPrevious}
                aria-label="Previous certificate"
            >
                ←
            </button>

            <motion.div
                key={certificate.id}
                className="certificate-viewer-content"
                initial={{
                    opacity: 0,
                    scale: 0.94,
                    rotate: -1
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                }}
                transition={{
                    duration: 0.3
                }}
            >
                <div className="certificate-viewer-image">
                    <img
                        src={certificate.image}
                        alt={certificate.title}
                    />
                </div>

                <div className="certificate-viewer-info">
                    <div>
                        <span>
                            {certificate.organization}
                        </span>

                        <h2>
                            {certificate.title}
                        </h2>

                        <p>
                            {certificate.description}
                        </p>
                    </div>

                    <strong>
                        {certificate.year}
                    </strong>
                </div>
            </motion.div>

            <button
                type="button"
                className="certificate-viewer-arrow certificate-viewer-next"
                onClick={onNext}
                aria-label="Next certificate"
            >
                →
            </button>

            <div className="certificate-viewer-counter">
                {String(activeIndex + 1).padStart(2, "0")}
                {" / "}
                {String(certificates.length).padStart(2, "0")}
            </div>
        </motion.div>
    );
}