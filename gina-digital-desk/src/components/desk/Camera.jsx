import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Camera() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/camera.webp"
            alt="Explore my travels"
            className="desk-camera"
            rotate={-8}
            label="travel diary"
            onClick={() => openObject("camera")}
        />
    );
}