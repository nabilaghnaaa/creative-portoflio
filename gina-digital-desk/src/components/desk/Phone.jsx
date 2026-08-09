import { motion } from "motion/react";
import { useDesk } from "../../context/DeskContext";

export default function Phone() {
    const { openObject } = useDesk();

    return (
        <motion.button
            type="button"
            className="desk-object desk-phone-group"
            onClick={() => openObject("phone")}
            initial={{ rotate: -2 }}
            whileHover={{
                y: -5,
                scale: 1.03
            }}
            whileTap={{
                scale: 0.97
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 18
            }}
            aria-label="Open phone and contact card"
        >
            <img
                className="desk-phone-card"
                src="/assets/phone/call-card.webp"
                alt="Gina contact card"
            />

            <img
                className="desk-phone-image"
                src="/assets/phone/phone.webp"
                alt="Phone"
            />
        </motion.button>
    );
}