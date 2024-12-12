const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const robots = require('./data/fake_robot_data.json');

const app = express();
const PORT = 5000;

app.use(cors());

// REST API to fetch robot data
app.get('/api/robots', (req, res) => {
  res.json(robots);
});

// WebSocket server for real-time updates
const server = app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');
  const sendUpdates = setInterval(() => {
    const updatedData = robots.map((robot) => ({
      ...robot,
      battery: Math.max(0, robot.battery - Math.random() * 5),
      lastUpdated: new Date().toISOString(),
    }));
    ws.send(JSON.stringify(updatedData));
  }, 5000);

  ws.on('close', () => {
    clearInterval(sendUpdates);
    console.log('Client disconnected');
  });
});
