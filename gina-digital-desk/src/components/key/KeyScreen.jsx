import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./key.css";

const UMY_LOCATION = {
    lat: -7.81058,
    lng: 110.32281
};

const userIcon = L.divIcon({
    className: "key-user-marker",
    html: `
        <div class="key-marker-pulse"></div>
        <div class="key-marker-dot"></div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11]
});

const umyIcon = L.divIcon({
    className: "key-umy-marker",
    html: `
        <div class="key-umy-pin">
            <span>UMY</span>
        </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 44]
});

function MapController({ userLocation }) {
    const map = useMap();

    useEffect(() => {
        if (!userLocation) {
            map.setView(
                [UMY_LOCATION.lat, UMY_LOCATION.lng],
                15
            );
            return;
        }

        const bounds = L.latLngBounds([
            [userLocation.lat, userLocation.lng],
            [UMY_LOCATION.lat, UMY_LOCATION.lng]
        ]);

        map.fitBounds(bounds, {
            padding: [70, 70],
            maxZoom: 15
        });
    }, [map, userLocation]);

    return null;
}

export default function KeyScreen({ onClose }) {
    const [userLocation, setUserLocation] = useState(null);
    const [locationStatus, setLocationStatus] = useState("idle");

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocationStatus("unsupported");
            return;
        }

        setLocationStatus("loading");

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });

                setLocationStatus("success");
            },
            () => {
                setLocationStatus("denied");
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000
            }
        );
    }, []);

    const openGoogleMaps = () => {
        const destination = `${UMY_LOCATION.lat},${UMY_LOCATION.lng}`;

        if (userLocation) {
            const origin = `${userLocation.lat},${userLocation.lng}`;

            window.open(
                `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`,
                "_blank",
                "noopener,noreferrer"
            );

            return;
        }

        window.open(
            `https://www.google.com/maps/search/?api=1&query=${destination}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <motion.div
            className="key-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="key-window"
                initial={{
                    opacity: 0,
                    scale: 0.92,
                    y: 25
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.45,
                    type: "spring",
                    stiffness: 180,
                    damping: 20
                }}
            >
                <button
                    type="button"
                    className="key-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <div className="key-tape key-tape-one" />
                <div className="key-tape key-tape-two" />

                <header className="key-header">
                    <div className="key-heading">
                        <span className="key-kicker">
                            06 / A LITTLE PLACE
                        </span>

                        <h1>
                            Where I <em>belong.</em>
                        </h1>

                        <p>
                            Some places become more than just
                            a point on a map. They become part
                            of the story you're still writing.
                        </p>
                    </div>

                    <div className="key-index">
                        <span>LOCATION</span>
                        <strong>06</strong>
                        <small>MY JOURNEY</small>
                    </div>
                </header>

                <div className="key-divider" />

                <section className="key-location-intro">
                    <div className="key-location-number">
                        01
                    </div>

                    <div className="key-location-title">
                        <span>
                            ONE PLACE, MANY MEMORIES
                        </span>

                        <h2>
                            Universitas Muhammadiyah
                            <br />
                            <em>Yogyakarta.</em>
                        </h2>
                    </div>

                    <p>
                        A place that has quietly become part
                        of my journey, my growth, my people,
                        and the stories I carry with me.
                    </p>
                </section>

                <section className="key-map-section">
                    <div className="key-map">
                        <MapContainer
                            center={[
                                UMY_LOCATION.lat,
                                UMY_LOCATION.lng
                            ]}
                            zoom={15}
                            scrollWheelZoom={true}
                            zoomControl={true}
                            attributionControl={true}
                        >
                            <TileLayer
                                attribution='&copy; OpenStreetMap contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <MapController
                                userLocation={userLocation}
                            />

                            {userLocation && (
                                <Marker
                                    position={[
                                        userLocation.lat,
                                        userLocation.lng
                                    ]}
                                    icon={userIcon}
                                >
                                    <Popup>
                                        You are here
                                    </Popup>
                                </Marker>
                            )}

                            <Marker
                                position={[
                                    UMY_LOCATION.lat,
                                    UMY_LOCATION.lng
                                ]}
                                icon={umyIcon}
                            >
                                <Popup>
                                    Universitas Muhammadiyah
                                    Yogyakarta
                                </Popup>
                            </Marker>
                        </MapContainer>

                        <div className="key-map-caption">
                            <span>THE STARTING POINT</span>
                            <strong>
                                Universitas Muhammadiyah
                                Yogyakarta
                            </strong>
                        </div>
                    </div>

                    <aside className="key-location-card">
                        <span className="key-card-label">
                            MY LOCATION
                        </span>

                        <div className="key-card-status">
                            <span className="key-status-dot" />

                            {locationStatus === "loading" && (
                                <span>
                                    Finding your location...
                                </span>
                            )}

                            {locationStatus === "success" && (
                                <span>
                                    Your location found
                                </span>
                            )}

                            {locationStatus === "denied" && (
                                <span>
                                    Location permission unavailable
                                </span>
                            )}

                            {locationStatus === "unsupported" && (
                                <span>
                                    Location unavailable
                                </span>
                            )}

                            {locationStatus === "idle" && (
                                <span>
                                    Waiting for location...
                                </span>
                            )}
                        </div>

                        <div className="key-destination">
                            <span>DESTINATION</span>

                            <h3>
                                Universitas
                                <br />
                                Muhammadiyah
                                <br />
                                Yogyakarta
                            </h3>

                            <p>
                                Kasihan, Bantul
                                <br />
                                Daerah Istimewa Yogyakarta
                            </p>
                        </div>

                        <div className="key-card-line" />

                        <p className="key-card-note">
                            The map starts from wherever
                            you are and leads back to a
                            place that means something to me.
                        </p>

                        <button
                            type="button"
                            className="key-direction-button"
                            onClick={openGoogleMaps}
                        >
                            <span>
                                OPEN DIRECTIONS
                            </span>

                            <strong>↗</strong>
                        </button>
                    </aside>
                </section>

                <section className="key-note">
                    <div className="key-note-symbol">
                        ✦
                    </div>

                    <div>
                        <span>
                            A LITTLE THOUGHT
                        </span>

                        <p>
                            Wherever you are right now,
                            every journey has somewhere
                            meaningful to lead you.
                        </p>
                    </div>

                    <strong>
                        — gina
                    </strong>
                </section>

                <footer className="key-footer">
                    <span>
                        REGINA RANA NABILA
                    </span>

                    <span>
                        YOGYAKARTA / INDONESIA
                    </span>

                    <span>
                        2026
                    </span>
                </footer>
            </motion.div>
        </motion.div>
    );
}