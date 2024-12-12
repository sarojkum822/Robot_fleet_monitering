Robot Fleet Monitoring Dashboard

Overview
This project is a Robot Fleet Monitoring Dashboard that displays the status and telemetry data of multiple robots in real-time. The application uses the MERN stack (MongoDB, Express.js, React.js, Node.js) to simulate and display the robots' status, including battery, CPU usage, RAM consumption, and location coordinates.

The dashboard provides real-time updates on robot telemetry and displays their positions on an interactive map using Leaflet.js. It also highlights robots that are offline or have low battery levels.

Features
- Robot List: Displays robot details such as ID, Online/Offline status, Battery percentage, CPU usage, RAM consumption, Last updated timestamp, and Location coordinates.
- Real-time Updates: The status of robots is updated in real-time using WebSockets, with data refreshing every 5 seconds.
- Map View: Uses Leaflet.js to display the location of robots on a map, showing their current positions.
- Filters: Allows users to filter robots based on their status (Online/Offline, Low Battery, etc.).
- Responsive UI: The dashboard is responsive and can be accessed on both desktop and mobile devices.

Backend
The backend is built using Node.js and Express.js to serve the data and handle real-time communication via WebSockets. Mock telemetry data for up to 10 robots is generated and sent to the frontend.

APIs
- GET /api/robots: Fetches the list of robots with their telemetry data.
- WebSocket: Real-time updates for robot status and telemetry data (battery, CPU, RAM, position).

Frontend
The frontend is built with React.js and integrates real-time WebSocket updates to display the robots' telemetry data. Leaflet.js is used to display the map with robots' locations.

Technologies Used
- React.js: For building the user interface and managing state.
- Leaflet.js: For rendering the map with robot locations.
- WebSockets: For real-time updates.
- Node.js: Backend server for handling REST and WebSocket connections.
- Express.js: To create API endpoints.
- MongoDB: Used for storing robot data (mock data for this project).

Installation
Prerequisites
1. Node.js (version 14 or higher)
2. MongoDB (locally or cloud-hosted, e.g., MongoDB Atlas)

Clone the repository
git clone https://github.com/your-username/robot-fleet-monitoring.git
cd robot-fleet-monitoring

Backend Setup
1. Navigate to the backend directory:
    cd backend
2. Install dependencies:
    npm install
3. Start the backend server:
    npm start

Frontend Setup
1. Navigate to the frontend directory:
    cd frontend
2. Install dependencies:
    npm install
3. Start the frontend server:
    npm start

The frontend should now be accessible at http://localhost:3000.

Docker Setup (Optional)
To containerize the app using Docker:
1. Build the Docker image:
    docker build -t robot-fleet-monitoring .
2. Run the Docker container:
    docker run -p 3000:3000 robot-fleet-monitoring

Hosting
- Frontend: Hosted on Netlify.
- Backend: Hosted on Heroku.

Bonus Features
- Real-time updates using WebSockets.
- Filters to display robots by their status (e.g., active, offline, low battery).
- The frontend and backend are both deployed and accessible online.

Screenshots
![Dashboard Screenshot](path/to/screenshot.png)

Conclusion
This project showcases a complete, real-time monitoring solution for a fleet of robots, built using modern web technologies such as the MERN stack. It provides real-time updates, a clean and interactive UI, and integrates mapping to visualize the robots' locations.

License
This project is licensed under the MIT License - see the LICENSE file for details.
