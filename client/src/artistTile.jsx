import React from 'react';
import axios from 'axios';
import {showInfoModal} from './helpers.jsx';


class ArtistTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spotifyInfo: '',
      showInfo: false
    }
  }

  componentDidMount = (event) => {
    this.getSpotifyInfo()
  }

  handleArtistClick = (event) => {
    let info = !this.state.showInfo
    this.setState({
      showInfo: info
    })
  }

  getSpotifyInfo = () => {
    var params = {
      artist: this.props.artistName
    }
    axios.get('/spotifyInfo', {params})
    .then((res) => {
      var data = res.data[0]
      console.log(data, 'data from spotify')
      this.setState({
        spotifyInfo: data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render(){
    if(this.state.showInfo){
      var infoModal = showInfoModal(this.state.spotifyInfo)
    } else {
      var infoModal = <React.Fragment/>
    }

  return (
    <div className = "artist-tile" onClick = {this.handleArtistClick}>
    {infoModal}
    {this.props.artistName}
    </div>
  )
  }

}

export default ArtistTile;