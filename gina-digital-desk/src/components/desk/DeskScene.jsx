import Camera from "./Camera";
import Map from "./Map";
import Laptop from "./Laptop";
import Phone from "./Phone";
import Mousepad from "./Mousepad";
import Lanyard from "./Lanyard";
import Cv from "../cv/Cv";
import Coffee from "../coffee/Coffee";

export default function DeskScene() {
    return (
        <section className="desk-scene">
            <Mousepad />
            <Lanyard />
            <Camera />
            <Map />
            <Laptop />
            <Phone />
            <Cv />
            <Coffee />
        </section>
    );
}