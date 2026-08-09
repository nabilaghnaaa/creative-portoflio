import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Map() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/map.webp"
            alt="Explore my certificates"
            className="desk-map"
            rotate={15}
            onClick={() => openObject("map")}
        />
    );
}