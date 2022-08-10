import React from 'react';
import axios from 'axios';
import {showInfoModal, showTracks} from './helpers.jsx';


class ArtistTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spotifyInfo: '',
      showInfo: false,
      tracks: ''
    }
  }

  componentDidMount = (event) => {
    this.getSpotifyInfo()
  }

  componentDidUpdate = (event) => {
    if(this.state.lastCall !== this.props.artistName){
      this.getSpotifyInfo()
    }
  }

  handleArtistClick = (event) => {
    let info = !this.state.showInfo
    this.setState({
      showInfo: info
    })
  }

  getSpotifyInfo = () => {
    let artistName = this.props.artistName
    var params = {
      artist: artistName
    }
    axios.get('/spotifyInfo', {params})
    .then((res) => {
      console.log('res info', res)
      var data = res.data[0]
      var id = data.id
      var last = this.props.artistName
      var params = {
      artist: id
      }
      axios.get('/topTracks', {params})
      .then((res) => {
        console.log('res topTracks', res)
        var trackdata = res.data.tracks
        this.setState({
          spotifyInfo: data,
          tracks: trackdata,
          lastCall : last
        })
     })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render(){
    if(this.state.showInfo){
      var infoModal = <div className = "info-modal">{showInfoModal(this.state.spotifyInfo)}{showTracks(this.state.tracks)}</div>
    } else {
      var infoModal = <React.Fragment/>
    }

  return (
    <div>
    <div className = "artist-tile">
    <span className = "artist-name" onClick = {this.handleArtistClick}>{this.props.artistName}</span>
    <button className = 'remove-button' onClick = {() => {this.props.removeArtist(this.props.artistName)}}>X</button>
    </div>
    {infoModal}
    </div>
  )
  }

}

export default ArtistTile;