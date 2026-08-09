import { motion } from "motion/react";

export default function DeskObject({
    src,
    alt,
    className = "",
    onClick,
    interactive = true,
    rotate = 0,
    label = ""
}) {
    return (
        <motion.button
            type="button"
            className={`desk-object ${className}`}
            onClick={interactive ? onClick : undefined}
            initial={{
                rotate
            }}
            whileHover={
                interactive
                    ? {
                          scale: 1.06,
                          y: -6,
                          rotate: rotate + 2
                      }
                    : undefined
            }
            whileTap={
                interactive
                    ? {
                          scale: 0.97
                      }
                    : undefined
            }
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 18
            }}
            aria-label={alt}
        >
            <img
                src={src}
                alt={alt}
                draggable="false"
            />

            {label && (
                <span className="desk-object-label">
                    {label}
                </span>
            )}
        </motion.button>
    );
}