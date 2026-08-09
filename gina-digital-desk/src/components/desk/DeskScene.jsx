import Camera from "./Camera";
import Map from "./Map";
import Laptop from "./Laptop";
import Phone from "./Phone";
import Mousepad from "./Mousepad";
import Lanyard from "./Lanyard";
import Flower from "./Flower";
import Headphone from "../headphone/Headphone";
import Polaroid from "./Polaroid";
import Cv from "../cv/Cv";
import Coffee from "../coffee/Coffee";
import Book from "./Book";
import Tablet from "./Tablet";

export default function DeskScene() {
    return (
        <section className="desk-scene">
            <Mousepad />
            <Lanyard />
            <Flower />
            <Camera />
            <Map />
            <Laptop />
            <Phone />
            <Cv />
            <Coffee />
            <Headphone />
            <Book />
            <Polaroid />
            <Tablet />
        </section>
    );
}