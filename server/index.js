require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getInitialList} = require('../database/queries.js');
const {getArtistInfo, getTopTracks, createPlaylist} = require('./spotifyHelpers.js');

app.use(express.json());
app.use(express.static('client/dist'))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);

app.get('/artists', function(req,res){
  let festival = req.query.festival
  let number = Number(req.query.number)
  getInitialList(number, festival)
  .then((data) => {res.send(data)})
  .catch((err) => {
    console.log('err', err);
    res.SendStatus(404)
  })
})

app.get('/spotifyInfo', function(req,res){
  let artist = req.query.artist
  console.log(artist)
  getArtistInfo(artist)
  .then((data) => {res.send(data)})
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(404)
  })
})

app.get('/topTracks', function(req,res){
  let artist = req.query.artist
  getTopTracks(artist)
  .then((data) => {res.send(data)})
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(404)
  })
})


app.post('/createPlaylist', function(req,res){
  createPlaylist()
  .then((data) => {console.log('data', data); res.send(data)})
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(404)
  })
})