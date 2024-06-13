"use client";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const AddMap = forwardRef(function AddMap(props, ref) {
  const markerRef = ref;
  let map;
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const initializeMap = (lng, lat) => {
      map = new mapboxgl.Map({
        container: "addmap",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: 13,
      }).addControl(new mapboxgl.NavigationControl(), "top-right");

      const initialMarker = new mapboxgl.Marker({
        color: "#0c1f3d",
      })
        .setLngLat([lng, lat])
        .addTo(map);

      markerRef.current = initialMarker;

      map.on("click", (e) => {
        if (markerRef.current) {
          markerRef.current.remove();
        }
        const newMarker = new mapboxgl.Marker({
          color: "#0c1f3d",
        })
          .setLngLat(e.lngLat)
          .addTo(map);
        markerRef.current = newMarker;
      });
    };

    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          initializeMap(lng, lat);
        },
        (error) => {
          initializeMap(77.1025, 28.7041); // Default location in case of error
        }
      );
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude;
          if (map) {
            map.flyTo({
              center: [lng, lat],
              essential: true,
            });
            if (markerRef.current) {
              markerRef.current.remove();
            }
            const newMarker = new mapboxgl.Marker({
              color: "#0c1f3d",
            })
              .setLngLat([lng, lat])
              .addTo(map);
            markerRef.current = newMarker;
          }
        },
        () => {
          alert("Unable to retrieve your location");
        }
      );
    }
  };
  return (
    <div>
      <div className="relative w-[95vw] sm:w-[50vw] mt-4 h-[200px] sm:h-[300px] rounded-md mx-auto bg-slate-200 dark:bg-blue-800">
        <div
          id="addmap"
          className="absolute border-2 border-blue-800 rounded-md dark:border-gray-600 top-0 left-0 w-full h-full"
        ></div>
        <button
          onClick={handleGetLocation}
          className="bg-slate-600 rounded-full absolute left-2 top-2 z-10"
        >
          📍
        </button>
      </div>
    </div>
  );
});

export default AddMap;
