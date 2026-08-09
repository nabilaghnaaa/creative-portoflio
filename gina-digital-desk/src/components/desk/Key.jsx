import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Key() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/key.webp"
            alt="Explore where my journey began"
            className="desk-key"
            rotate={-12}
            label="where I belong"
            onClick={() => openObject("key")}
        />
    );
}