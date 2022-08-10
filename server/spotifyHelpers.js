require('dotenv').config();
const axios = require('axios');
const qs = require('qs');


const client_id = process.env.SPOTIFY_API_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
  try{
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});
    const response = await axios.post(token_url, data, {
      headers: {
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return response.data.access_token;
  }catch(error){
    console.log(error);
  }
}

const getArtistInfo = async (artist) => {
  let access_token = await getAuth();
  let api_url = `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    return response.data.artists.items;
  }catch(error){
    console.log(error);
  }
};

//need to work on this
const createPlaylist = async () => {
  let access_token = await getAuth();
  let user = process.env.SPOTIFY_USER_ID;
  let api_url = `https://api.spotify.com/v1/users/${user}/playlists`
  try{
    const response = await axios.post(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      },
      data: {'name': 'dailyPlaylist'}
    });
    console.log('response', response)
    return response.data;
  }catch(error){
    console.log('error',error);
  }
}

const getTopTracks = async (artistId) => {
  let access_token = await getAuth();
  let api_url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      },
    });
    return response.data;
  }catch(error){
    console.log('error',error);
  }
}

exports.getArtistInfo = getArtistInfo;
exports.createPlaylist = createPlaylist;
exports.getTopTracks = getTopTracks;