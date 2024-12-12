import React, { useEffect, useState } from 'react';
import RobotList from './components/RobotList';
import RobotMap from './components/RobotMap';
import './styles.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('https://robot-fleet-monitering.onrender.com/api/robots');
        const data = await response.json();
        setRobots(data);
      } catch (error) {
        console.error('Error fetching robots:', error);
      }
    };

    fetchRobots();

    const ws = new WebSocket('wss://robot-fleet-monitering.onrender.com');
    ws.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      setRobots(updatedData);
    };

    return () => ws.close();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    if (filter === 'all') return true;
    if (filter === 'active') return robot['Online/Offline'];
    if (filter === 'offline') return !robot['Online/Offline'];
    if (filter === 'low-battery') return robot['Battery Percentage'] < 20;
    return true;
  });

  return (
    <div className="App">
      <h1>Robot Fleet Monitoring Dashboard</h1>
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active-filter' : ''}>All</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active-filter' : ''}>Active</button>
        <button onClick={() => setFilter('offline')} className={filter === 'offline' ? 'active-filter' : ''}>Offline</button>
        <button onClick={() => setFilter('low-battery')} className={filter === 'low-battery' ? 'active-filter' : ''}>Low Battery</button>
      </div>
      <div className="dashboard">
        <RobotList robots={filteredRobots} />
        <RobotMap robots={filteredRobots} />
      </div>
    </div>
  );
};

export default App;