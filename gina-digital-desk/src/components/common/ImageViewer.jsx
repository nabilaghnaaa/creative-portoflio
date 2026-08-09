import { AnimatePresence, motion } from "motion/react";

export default function ImageViewer({
    photos,
    activeIndex,
    onClose,
    onNext,
    onPrevious
}) {
    const photo = photos[activeIndex];

    if (!photo) {
        return null;
    }

    return (
        <AnimatePresence>
            <motion.div
                className="image-viewer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <button
                    type="button"
                    className="image-viewer-close"
                    onClick={onClose}
                    aria-label="Close photo"
                >
                    ×
                </button>

                <button
                    type="button"
                    className="image-viewer-arrow image-viewer-prev"
                    onClick={onPrevious}
                    aria-label="Previous photo"
                >
                    ←
                </button>

                <motion.div
                    className="image-viewer-content"
                    key={photo.id}
                    initial={{
                        opacity: 0,
                        scale: 0.92,
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
                    <div className="image-viewer-photo">
                        <img
                            src={photo.image}
                            alt={photo.place}
                        />
                    </div>

                    <div className="image-viewer-caption">
                        <div>
                            <span>{photo.location}</span>
                            <h2>{photo.place}</h2>
                        </div>

                        <div className="image-viewer-year">
                            {photo.year}
                        </div>
                    </div>

                    <p className="image-viewer-description">
                        {photo.description}
                    </p>
                </motion.div>

                <button
                    type="button"
                    className="image-viewer-arrow image-viewer-next"
                    onClick={onNext}
                    aria-label="Next photo"
                >
                    →
                </button>

                <div className="image-viewer-counter">
                    {String(activeIndex + 1).padStart(2, "0")}
                    {" / "}
                    {String(photos.length).padStart(2, "0")}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}