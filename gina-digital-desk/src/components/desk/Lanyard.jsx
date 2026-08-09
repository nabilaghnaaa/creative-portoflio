import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Lanyard() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/lanyard.webp"
            alt="Explore my modeling journey"
            className="desk-lanyard"
            rotate={15}
            label="my modeling journey"
            onClick={() => openObject("lanyard")}
        />
    );
}