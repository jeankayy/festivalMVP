import React from 'react';
import ArtistTile from './artistTile.jsx';
import axios from 'axios';

class ArtistList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: '',
    }
  }

  handleArtistClick = (event) => {
    let clickedArtist = event.target.value;
    this.setState({
      clicked: clickedArtist
    })
  }

  render(){

  var artists = this.props.artists;

  return (
    <div className = "artists-list">

    <p className = 'artists-list-header'>Artists from {this.props.festival}</p>

    {artists.map(artist => {return <ArtistTile artistName = {artist.artist_name} removeArtist = {this.props.removeArtist}/> })
    }

    <div className = "artists-list-footer">
    <button onClick = {this.props.back}> Back </button>
    <button onClick = {this.props.handleFormClick}> New List! </button>
    </div>

    </div>
  )
  }

}

export default ArtistList;
