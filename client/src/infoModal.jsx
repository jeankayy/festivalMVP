import React from 'react';
import axios from 'axios';


class InfoModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showInfoModal = (infoObject) => {
    let genres = infoObject.genres
    let image = infoObject.images[0]['url']
    let genreList = genres.join(', ')
    return (
      <React.Fragment>
        <p className = "modal-text">Genre: {genreList}</p>
      </React.Fragment>
    )
  }

  playAnother = (tracks) => {
    console.log(tracks)
    let random = Math.floor(Math.random() * tracks.length)
    let updateURL = `https://open.spotify.com/embed/track/${tracks[random]['id']}`
    this.setState({
      trackURL: updateURL
    })
  }

  render(){
    if(!this.state.trackURL){
      var url = `https://open.spotify.com/embed/track/${this.props.tracks[0]['id']}`
    } else {
      url = this.state.trackURL
    }
    return(
    <div className = "info-modal">
    {this.showInfoModal(this.props.spotifyInfo)}
    <iframe src= {url} width="100%" height="80px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    <button className = 'remove-button' onClick = {() => this.playAnother(this.props.tracks)}>Play Another Song from Artist</button>
    </div>
    )
  }

}

export default InfoModal;