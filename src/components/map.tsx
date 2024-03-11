"use client";
import { FC, useEffect } from "react";
import L from "leaflet";
import HTMLProps from "@/interfaces/html-props";
import "leaflet/dist/leaflet.css";

const MapComponent: FC<HTMLProps<HTMLDivElement>> = (props) => {
  useEffect(() => {
    const map = L.map("leaflet-map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map,
    );

    return () => {
      map.remove();
    };
  }, []);

  return <div {...props} id="leaflet-map" />;
};

export default MapComponent;
