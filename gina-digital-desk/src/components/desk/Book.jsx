import DeskObject from "./DeskObject";
import { useDesk } from "../../context/DeskContext";

export default function Book() {
    const { openObject } = useDesk();

    return (
        <DeskObject
            src="/assets/desk/book.webp"
            alt="Explore my tech stack"
            className="desk-book"
            rotate={-20}
            label="my digital tools"
            onClick={() => openObject("book")}
        />
    );
}