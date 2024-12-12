import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';

const RobotMap = ({ robots }) => (
  <div className="robot-map">
    <h2>Robot Locations</h2>
    <MapContainer center={[34.946804, -1.265231]} zoom={5} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {robots.map((robot) => (
        <Marker key={robot['Robot ID']} position={robot['Location Coordinates']}>
          <Popup>
            <p><strong>ID:</strong> {robot['Robot ID']}</p>
            <p><strong>Status:</strong> {robot['Online/Offline'] ? 'Online' : 'Offline'}</p>
            <p><strong>Battery:</strong> {robot['Battery Percentage']}%</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);

RobotMap.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RobotMap;