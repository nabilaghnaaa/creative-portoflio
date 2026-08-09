import { motion } from "motion/react";
import { useDesk } from "../../context/DeskContext";
import "./cv.css";

export default function Cv() {
    const { openObject } = useDesk();

    return (
        <motion.button
            type="button"
            className="desk-object desk-cv"
            onClick={() => openObject("cv")}
            initial={{ rotate: -10 }}
            whileHover={{
                scale: 1.05,
                y: -5,
                rotate: 0
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 18
            }}
            aria-label="Open CV"
        >
            <img
                src="/assets/cv/cv.webp"
                alt="CV"
                draggable="false"
            />

            <span className="desk-object-label">
                my resume
            </span>
        </motion.button>
    );
}