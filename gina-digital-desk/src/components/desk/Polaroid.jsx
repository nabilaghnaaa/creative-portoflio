import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Polaroid() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/polaroid.webp"
            alt="Explore my social memories"
            className="desk-polaroid"
            rotate={-8}
            label="people & memories"
            onClick={() => openObject("polaroid")}
        />
    );
}