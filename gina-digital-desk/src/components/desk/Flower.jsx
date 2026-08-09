import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Flower() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/flower.webp"
            alt="A little reminder from Malang"
            className="desk-flower"
            rotate={-6}
            label="a little reminder"
            onClick={() => openObject("flower")}
        />
    );
}