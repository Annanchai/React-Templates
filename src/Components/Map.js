import React, { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "../Styles/Map.css";

const Map = () => {
  const center = useMemo(() => ({
    lat: 38.72075491759516,
    lng: -9.145945218308396,
  }));
  return (
    <GoogleMap
      zoom={12}
      center={{ lat: 38.72075491759516, lng: -9.145945218308396 }}
      mapContainerClassName="mapContainer"
    >
      <Marker position={{ lat: 38.72075491759516, lng: -9.145945218308396 }} />
    </GoogleMap>
  );
};

export default Map;
