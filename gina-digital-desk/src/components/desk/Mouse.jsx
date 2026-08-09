import DeskObject from "./DeskObject";

export default function Mouse() {
    return (
        <DeskObject
            src="/assets/desk/mouse.webp"
            alt="My mouse"
            className="desk-mouse"
            rotate={-8}
            label="my everyday setup"
            interactive={false}
            hoverable={true}
        />
    );
}