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
    if(this.state.tracks === '' && this.state.spotifyInfo !== ''){
      this.getTopTracks()
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
      var data = res.data[0]
      this.setState({
        spotifyInfo: data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getTopTracks = () => {
    var id = this.state.spotifyInfo.id
    var params = {
      artist: id
    }
    axios.get('/topTracks', {params})
    .then((res) => {
      var data = res.data.tracks
      this.setState({
        tracks: data
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
    <div className = "artist-tile" onClick = {this.handleArtistClick}>
    {this.props.artistName}
    {infoModal}
    </div>
  )
  }

}

export default ArtistTile;