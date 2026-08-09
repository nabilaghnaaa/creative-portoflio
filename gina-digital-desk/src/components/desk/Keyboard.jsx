import DeskObject from "./DeskObject";

export default function Keyboard() {
    return (
        <DeskObject
            src="/assets/desk/keyboard.webp"
            alt="My keyboard"
            className="desk-keyboard"
            rotate={0}
            label="my everyday setup"
            interactive={false}
            hoverable={true}
        />
    );
}