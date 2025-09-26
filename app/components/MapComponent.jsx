import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom bus icon
const busIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61205.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

// Custom stop icon for regular stops
const stopIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

// Custom stop icon for next stop (orange)
const nextStopIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1865/1865269.png", // Orange marker
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

export default function MapComponent({ busData, selectedBusId }) {
  if (!busData || !busData.bus_lines || busData.bus_lines.length === 0) {
    return (
      <div className="h-80 w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-center py-4 text-gray-600">No buses available</p>
      </div>
    );
  }

  const selectedBus =
    busData.bus_lines.find((bus) => bus.id === selectedBusId) ||
    busData.bus_lines[0];

  const center = [
    selectedBus.current_location.latitude,
    selectedBus.current_location.longitude,
  ];

  const nextStop = selectedBus.bus_stops.find((stop) => stop.is_next_stop);

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border-2 border-gray-200">
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        {/* Carto Light tiles (free, no API key needed) */}
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Bus marker */}
        <Marker
          position={[
            selectedBus.current_location.latitude,
            selectedBus.current_location.longitude,
          ]}
          icon={busIcon}
        >
          <Popup>
            <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 min-w-56">
              <h3 className="font-bold text-red-800 mb-2 text-lg">
                Bus {selectedBus.route_number}
              </h3>
              <p className="text-sm text-red-700 mb-2">
                <span className="font-medium">Status:</span>
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1 ml-2"></span>
                {selectedBus.status}
              </p>
              <p className="text-sm text-red-700 mb-2">
                <span className="font-medium">Capacity:</span>{" "}
                {selectedBus.passengers.utilization_percentage}%
              </p>
              <p className="text-sm text-red-700 mb-3">
                <span className="font-medium">Next Stop:</span>{" "}
                {nextStop?.name || "Unknown"}
              </p>
              <div className="flex items-center text-sm text-red-700">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2-2zM4 18v-4h3v-3h2l3 2h5v2h-3l-3-2h-1v3H7v4H4zm14.5-11c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5S15 12.43 15 11s1.57-3.5 3.5-3.5z"/>
                </svg>
                <span>
                  {selectedBus.passengers.current}/{selectedBus.passengers.capacity} passengers
                </span>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* Route polyline */}
        {selectedBus.bus_stops.length > 1 && (
          <Polyline
            positions={selectedBus.bus_stops.map((stop) => [
              stop.latitude,
              stop.longitude,
            ])}
            color="#10b981"
            weight={3}
            opacity={0.8}
            dashArray="10, 5"
          />
        )}

        {/* Bus stop markers */}
        {selectedBus.bus_stops.map((stop) => (
          <Marker
            key={stop.id}
            position={[stop.latitude, stop.longitude]}
            icon={stop.is_next_stop ? nextStopIcon : stopIcon}
          >
            <Popup>
              <div className="p-3 min-w-48">
                <h4 className="font-bold text-gray-800 mb-2">{stop.name}</h4>
                <p className="text-sm text-gray-600">
                  Next Arrival:{" "}
                  <span className="font-medium text-blue-600">
                    {stop.estimated_arrival}
                  </span>
                </p>
                {stop.is_next_stop && (
                  <p className="text-xs text-orange-600 font-medium mt-1">
                    🚌 Next Stop
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
