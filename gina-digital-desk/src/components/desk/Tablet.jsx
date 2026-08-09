import { motion } from "motion/react";
import { useDesk } from "../../context/DeskContext";
import "../tablet/tablet.css";

export default function Tablet() {
    const { openObject } = useDesk();

    const handleOpen = () => {
        openObject("tablet");
    };

    return (
        <motion.div
            className="desk-tablet-group"
            initial={{ y: 0 }}
            whileHover={{ y: -7 }}
            transition={{
                type: "spring",
                stiffness: 280,
                damping: 20
            }}
        >
            <motion.button
                type="button"
                className="desk-tablet"
                onClick={handleOpen}
                initial={{ rotate: 20 }}
                whileHover={{ rotate: 15, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18
                }}
                aria-label="Open creative works"
            >
                <img
                    src="/assets/desk/tablet.webp"
                    alt="Creative works"
                    draggable="false"
                />
                <span className="desk-object-label">
                    creative works
                </span>
            </motion.button>

            <motion.button
                type="button"
                className="desk-stylus"
                onClick={handleOpen}
                initial={{ rotate: -18 }}
                whileHover={{ rotate: -17, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18
                }}
                aria-label="Open creative works"
            >
                <img
                    src="/assets/desk/stylus.webp"
                    alt="Stylus"
                    draggable="false"
                />
            </motion.button>
        </motion.div>
    );
}