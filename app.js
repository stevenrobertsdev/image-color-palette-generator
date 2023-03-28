const express = require('express');
const multer = require('multer');
const Vibrant = require('node-vibrant');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imagePath = req.file.path;

    Vibrant.from(imagePath).getPalette((err, palette) => {
      fs.unlinkSync(imagePath);

      if (err) {
        console.error('Error:', err);
        res.status(500).send('An error occurred while processing the image');
      } else {
        const colors = Object.values(palette)
          .sort((a, b) => b.population - a.population)
          .slice(0, 5)
          .map((swatch) => swatch.hex);

        res.send(`
      <h1>Primary Colors:</h1>
      <ul>
        ${colors
          .map(
            (color) => `<li style="background-color:${color};">${color}</li>`
          )
          .join('')}
      </ul>
    `);
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while processing the image');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});