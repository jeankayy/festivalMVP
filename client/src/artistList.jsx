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
    {artists.map(artist => {return <ArtistTile artistName = {artist.artist_name}/> })
    }
   </div>
  )
  }

}

export default ArtistList;
