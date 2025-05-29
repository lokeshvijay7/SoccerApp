const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/matches', async (req, res) => {
  try {
    const response = await axios.get('https://www.scorebat.com/video-api/v3/');
    res.json(response.data.response.slice(0, 10)); // Send top 10
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
