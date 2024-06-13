"use client";
import React, { useState, useRef, useEffect } from "react";
import AddMap from "./AddMap";
import AddMarker from "./AddMarker";
function AddRoad() {
  const ref = useRef(null);
  return (
    <div className="flex items-center justify-center sm:flex-row flex-col sm:px-16">
      <AddMap ref={ref} />
      <AddMarker ref={ref}/>
    </div>
  );
}

export default AddRoad;
