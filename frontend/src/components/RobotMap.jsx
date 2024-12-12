import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const RobotMap = ({ robots }) => {
  const defaultPosition = [34.946804, -1.265231]; // Fallback position

  return (
    <div className="robot-map">
      <h2>Robot Locations</h2>
      <MapContainer center={defaultPosition} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {robots.map((robot) => (
          <Marker key={robot['Robot ID']} position={robot['Location Coordinates']}>
            <Popup>
              <p>ID: {robot['Robot ID']}</p>
              <p>Status: {robot['Online/Offline'] ? 'Online' : 'Offline'}</p>
              <p>Battery: {robot['Battery Percentage']}%</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default RobotMap;
