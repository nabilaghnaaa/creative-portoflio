import Camera from "./Camera";
import Map from "./Map";
import Laptop from "./Laptop";
import Phone from "./Phone";
import Cv from "../cv/Cv";

export default function DeskScene() {
    return (
        <section className="desk-scene">
            <Camera />
            <Map />
            <Laptop />
            <Phone />
            <Cv />
        </section>
    );
}