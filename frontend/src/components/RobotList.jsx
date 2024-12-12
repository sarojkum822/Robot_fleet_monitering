import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const RobotList = ({ robots }) => (
  <div className="robot-list">
    <h2>Robot List</h2>
    <ul>
      {robots.map((robot) => (
        <li
          key={robot['Robot ID']}
          className={
            !robot['Online/Offline'] ? 'offline' : robot['Battery Percentage'] < 20 ? 'low-battery' : ''
          }
        >
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
      ))}
    </ul>
  </div>
);

RobotList.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RobotList;