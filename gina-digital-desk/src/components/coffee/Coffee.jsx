import { motion } from "motion/react";
import { useDesk } from "../../context/DeskContext";
import "./coffee.css";

export default function Coffee() {
    const { openObject } = useDesk();

    return (
        <motion.button
            type="button"
            className="desk-object desk-coffee"
            onClick={() => openObject("coffee")}
            initial={{ rotate: -4 }}
            whileHover={{
                y: -6,
                scale: 1.05,
                rotate: 0
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 18
            }}
            aria-label="Open coffee"
        >
            <img
                src="/assets/coffee/coffee.webp"
                alt="Coffee"
                draggable="false"
            />

            <span className="coffee-object-label">
                coffee break
            </span>
        </motion.button>
    );
}