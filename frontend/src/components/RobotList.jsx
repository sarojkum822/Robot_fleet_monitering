import React, { useEffect, useState } from 'react';

const RobotList = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    // Fetch robot data from the API on mount
    fetch('https://robot-fleet-monitering.onrender.com/api/robots')
      .then((response) => response.json())
      .then((data) => {
        setRobots(data); // Set the robot data in state
      })
      .catch((error) => {
        console.error('Error fetching robot data:', error);
      });
  }, []);

  return (
    <div className="robot-list">
      <ul>
        {robots.map((robot) => {
          let className = '';
          if (!robot['Online/Offline']) {
            className = 'offline'; // Red for offline
          } else if (robot['Battery Percentage'] < 20) {
            className = 'low-battery'; // Yellow for low battery
          }

          return (
            <li key={robot['Robot ID']} className={className}>
              <p><strong>Robot ID:</strong> {robot['Robot ID']}</p>
              <p><strong>Status:</strong> {robot['Online/Offline'] ? 'Online' : 'Offline'}</p>
              <p><strong>Battery:</strong> {robot['Battery Percentage']}%</p>
              <p><strong>CPU Usage:</strong> {robot['CPU Usage']}%</p>
              <p><strong>RAM Consumption:</strong> {robot['RAM Consumption']} MB</p>
              <p><strong>Last Updated:</strong> {robot['Last Updated']}</p>
              <p>
                <strong>Location:</strong> ({robot['Location Coordinates'][0]}, {robot['Location Coordinates'][1]})
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RobotList;
