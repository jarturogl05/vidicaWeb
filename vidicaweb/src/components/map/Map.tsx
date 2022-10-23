import React from "react";
import MapIcon from "../../assets/mapTest.png";

function MapView() {
  return (
    <div className="flex flex-col h-screen map-box">
        <img className="image-map-box" src={MapIcon} />
    </div>
  );
}

export default MapView;
