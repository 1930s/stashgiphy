const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

// API calls
app.get('/api/gifs', (req, res) => {
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${req.query.search}`)
    .then(response => res.send(response.data.data.map(gif => {
      return {
        url: gif.images.fixed_height.url,
        bitly_url: gif.bitly_url,
        id: gif.id
      }
    })))
    .catch(err => console.error(err));
});

app.get('/api/trending', (req, res) => {
  axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw`)
    .then(response => res.send(response.data.data.map(gif => {
      return {
        url: gif.images.fixed_height.url,
        id: gif.id
      }
    })))
    .catch(err => console.error(err));
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));