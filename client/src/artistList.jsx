import React from 'react'
import ArtistTile from './artistTile.jsx'

class ArtistList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){

  var artists = this.props.artists;

  return (
    <div className = "artists-list">
    {artists.map((artist) => {return <ArtistTile artistName = {artist.artist_name}/>})}
   </div>
  )
  }

}

export default ArtistList;