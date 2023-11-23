import "./styles.css";
import "../../../node_modules/leaflet/dist/leaflet.css";
import L, { type LatLngBoundsExpression, Map } from "leaflet";
import { useEffect, useRef, useState } from "react";
import { campingSpotsData } from "../../lib/data";

export default function CampingMap() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const marker = useRef<L.Marker | null>(null);

  useEffect(() => {
    const bounds: LatLngBoundsExpression = [
      [0, 0],
      [600, 600],
    ];

    map.current = L.map(mapRef.current as HTMLElement, {
      crs: L.CRS.Simple,
      zoomControl: false,
      maxBounds: bounds,
      maxZoom: 2,
    });

    L.imageOverlay("/map.webp", bounds).addTo(map.current);
    L.control.zoom({ position: "topright" }).addTo(map.current);
    marker.current = L.marker(campingSpotsData[0].latLon).addTo(map.current);
    map.current.fitBounds(bounds);
    map.current.setView(campingSpotsData[0].latLon, 1);

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleCampChange = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= campingSpotsData.length) return;

    setCurrentIndex(newIndex);
    marker.current?.setLatLng(campingSpotsData[newIndex].latLon);
    map.current?.panTo(campingSpotsData[newIndex].latLon, { animate: true });
  };

  const handlePreviusCamp = () => {
    handleCampChange(currentIndex - 1);
  };

  const handleNextCamp = () => {
    handleCampChange(currentIndex + 1);
  };

  const currentSpot = campingSpotsData[currentIndex];

  return (
    <article className="camping-map-container">
      <hgroup className="camping-map-info-container">
        <p className="camping-map-id">
          {currentSpot.id} / {campingSpotsData.length}
        </p>
        <h3 className="camping-map-place">{currentSpot.place}</h3>
        <p className="camping-map-name">{currentSpot.campName}</p>
      </hgroup>
      <div className="camping-selectors-container">
        <button
          className="camping-selector"
          onClick={handlePreviusCamp}
          aria-label="Previous camping spot"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox={"0 0 256 256"}
            color={"currentColor"}
          >
            <path
              fill="currentColor"
              d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z"
            ></path>
          </svg>
        </button>
        <button
          className="camping-selector"
          onClick={handleNextCamp}
          aria-label="Next camping spot"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox={"0 0 256 256"}
            color={"currentColor"}
          >
            <path
              fill="currentColor"
              d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="map-container">
        <div id="map" ref={mapRef}></div>
      </div>
    </article>
  );
}
