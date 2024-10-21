const Weather = require('../models/Weather');
const axios = require('axios');
const nodemailer = require('nodemailer');
const checkForAlerts = async (city, temp) => {
    const threshold = 35; // Threshold in Celsius
    if (temp > threshold) {
        const alertMessage = `${city} has exceeded the temperature threshold with a current temperature of ${temp}°C.`;
    
        console.log(alertMessage);
    
        // Send email alert
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
    
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'user@example.com', // Add recipient email
          subject: 'Weather Alert',
          text: alertMessage,
        };
    
        await transporter.sendMail(mailOptions);
      }
    };

const fetchAndStoreWeatherData = async () => {
  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

  try {
    const weatherData = await Promise.all(
      cities.map(async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`);
        const temp = (response.data.main.temp - 273.15).toFixed(2); // Convert to Celsius
        const condition = response.data.weather[0].main;

        const weatherRecord = new Weather({
          city,
          temp: parseFloat(temp),
          dominantCondition: condition,
        });
        await weatherRecord.save(); // Save to MongoDB

        return weatherRecord;
      })
    );

    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

module.exports = { fetchAndStoreWeatherData };
