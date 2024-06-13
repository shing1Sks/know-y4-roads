"use client";
import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import getRoads from "@/tools/getRoads";
import ReactDOMServer from "react-dom/server";

function Map() {
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  const getMarkers = async () => {
    const res = await getRoads();
    // console.log(res);
    if (Array.isArray(res) && res.length > 0) {
      setMarkers(res);
    }
  };

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const mapInstance = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: 11,
          })
            .addControl(new mapboxgl.NavigationControl(), "top-right")
            .addControl(
              new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                unit: "metric",
              }),
              "top-left"
            );

          setMap(mapInstance);
        },
        () => {
          const mapInstance = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v12",
            center: [77.1025, 28.7041], // Default to New Delhi
            zoom: 11,
          })
            .addControl(new mapboxgl.NavigationControl(), "top-right")
            .addControl(
              new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                unit: "metric",
              }),
              "top-left"
            );

          setMap(mapInstance);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((marker) => {
        const popupContent = (
          <div className="w-full h-[200px] overflow-auto flex flex-col items-center justify-center text-red-700 bg-slate-300">
            <p className="text-black text-center text-xl">{marker.condition}</p>
            <p className="text-black text-justify text-lg">{marker.description}</p>
            {marker.images.map((img, index) => (
              <img key={index} src={img} className="w-[100px]" alt="road condition" />
            ))}
            <p className="text-black text-center text-sm">{new Date(marker.createdAt).toLocaleString()}</p>
          </div>
        );

        const popupHTML = ReactDOMServer.renderToStaticMarkup(popupContent);

        new mapboxgl.Marker({ color: "#0c1f3d" })
          .setLngLat([marker.longitude, marker.latitude])
          .setPopup(new mapboxgl.Popup().setHTML(popupHTML))
          .addTo(map);
      });
    }
  }, [map, markers]);

  useEffect(() => {
    getMarkers();
  }, []);

  return (
    <div className="relative w-[98vw] sm:w-[90vw] mt-4 h-[300px] sm:h-[400px] rounded-md mx-auto bg-slate-200 dark:bg-blue-800">
      <div
        id="map"
        className="absolute border-2 border-blue-800 rounded-md dark:border-gray-600 top-0 left-0 w-full h-full"
      ></div>
    </div>
  );
}

export default Map;
