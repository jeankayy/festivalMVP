require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getInitialList} = require('../database/queries.js');
const {getArtistInfo, getTopTracks, createPlaylist, addTracks} = require('./spotifyHelpers.js');

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
  getArtistInfo(artist)
  .then((data) => {res.send(data)})
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(404)
  })
})

var holdURIs = {}

app.get('/topTracks', function(req,res){
  let artist = req.query.artist
  let name = req.query.name
  getTopTracks(artist)
  .then((data) => {
    holdURIs[name] = data.tracks;
    res.send(data)
  })
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(404)
  })
})

app.post('/createPlaylist', function(req,res){
  console.log(req)
  let artists = req.body.artists
  let URIs = []
  artists.forEach((artist) => {
    var tracksArr = holdURIs[artist]
    tracksArr.forEach((track) => {
      var uri = track.uri
      URIs.push(uri)
    })
  })
  let tracks = URIs.join(',')
  console.log('URIs', URIs)
  createPlaylist()
  .then((data) => {
    addTracks(data, tracks)
    res.sendStatus(200)
   })
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(404)
  })
})

app.put('/addTracks', function(req,res){
  let playlist = '19s5RIlPW0WWegxxYGZCTj'
  let tracks = "spotify:track:3ArnNhm8z0ScjDKfGHSBRk,spotify:track:48gA52MllkD3wDEwBLCHUE"
  addTracks(playlist, tracks)
  .then((data) => {console.log('data', data); res.send(data)})
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(404)
  })
})