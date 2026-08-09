import { motion } from "motion/react";
import ProjectExplorer from "./ProjectExplorer";
import "./laptop.css";

export default function LaptopScreen({ onClose }) {
    return (
        <motion.div
            className="laptop-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="laptop-window"
                initial={{
                    opacity: 0,
                    scale: 0.92,
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22
                }}
            >
                <div className="laptop-window-header">
                    <div className="laptop-window-brand">
                        <span className="laptop-dot" />
                        <span>gina's workspace</span>
                    </div>

                    <span className="laptop-window-status">
                        projects / archive
                    </span>

                    <button
                        type="button"
                        className="laptop-close"
                        onClick={onClose}
                        aria-label="Close laptop"
                    >
                        ×
                    </button>
                </div>

                <ProjectExplorer />
            </motion.div>
        </motion.div>
    );
}