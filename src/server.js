const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 8001;

app.use(cors());

// Serve static files from the React app
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve all images in the images directory
app.get('/api/images', (req, res) => {
  const fs = require('fs');
  const directoryPath = path.join(__dirname, 'images');
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    res.json(files.filter(file => file.endsWith('.png')));
  });
});

// Catch-all handler for any requests to an unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
