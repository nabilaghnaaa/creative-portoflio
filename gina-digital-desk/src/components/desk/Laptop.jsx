import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Laptop() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/laptop.webp"
            alt="Explore my projects"
            className="desk-laptop"
            label="my projects"
            onClick={() => openObject("laptop")}
        />
    );
}