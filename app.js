const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Artist = require('./controllers/Artist');
const ArtistController = require('./controllers/Artist');

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

const app = express();
mongoose.connect(process.env.DATABASE_CONN);
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello MongoDb!'));
app.post('/Artist', Artist.post);
app.get('/Artist', ArtistController.list);
app.get('/Artist/:artistId', ArtistController.get);
app.get('/Artist/:artistId', ArtistController.put);

app.listen(3000, () => console.log('It works!'));
