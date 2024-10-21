# Real-Time-Data-Processing-System-for-Weather-Monitoring-with-Rollups-and-Aggregates
This project is a real-time weather monitoring system that processes weather data, computes rollups and aggregates (such as average, maximum, and minimum temperatures), and displays the data using a front-end React application. The project utilizes MongoDB for data storage and Express.js as a backend server.
#Features
Real-Time Weather Monitoring: Fetches weather data for multiple cities.
Data Rollups and Aggregates: Calculates daily summaries like average, maximum, and minimum temperatures.
Alerts: Set up threshold alerts (e.g., temperature exceeding 35°C).
Visualizations: Chart-based visualizations using Chart.js.
#project structure
.
├── backend
│   ├── config          # MongoDB configuration
│   ├── controllers     # API route handlers
│   ├── models          # Mongoose models
│   ├── routes          # API routes
│   └── server.js       # Main entry point for the backend server
├── frontend
│   ├── public
│   └── src
│       ├── components  # React components
│       ├── App.js      # Main entry point for the frontend app
└── README.md
#Prerequisites
To run the project, you need the following installed on your machine:

Node.js (v16 or above)
MongoDB (Local or Cloud Instance)
Git
#Setup Instructions
1. Clone the Repository
git clone https://github.com/bhattk64/Real-Time-Data-Processing-System-for-Weather-Monitoring-with-Rollups-and-Aggregates.git
cd Real-Time-Data-Processing-System-for-Weather-Monitoring-with-Rollups-and-Aggregates
2.Set Up Backend
1.Navigate to the backend directory:cd backend
2.Install dependencies:npm install
3.Create a .env file in the backend folder with the following content:
MONGO_URI=<Your MongoDB URI>
PORT=5000
4.Start the backend server: npm start
