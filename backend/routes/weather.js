const express = require('express');
const Weather = require('../models/Weather');
const router = express.Router();

router.get('/summary', async (req, res) => {
  try {
    const summaries = await Weather.aggregate([
      {
        $group: {
          _id: { day: { $dayOfMonth: '$date' }, city: '$city' },
          avgTemp: { $avg: '$temp' },
          maxTemp: { $max: '$temp' },
          minTemp: { $min: '$temp' },
          dominantCondition: { $first: '$dominantCondition' },
        },
      },
    ]);
    res.json(summaries);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
