import React from 'react';

const showInfoModal = (infoObject) => {
  let genres = infoObject.genres
  let image = infoObject.images[0]['url']
  let genreList = genres.join(', ')

  return (
    <React.Fragment>
      <p className = "modal-text">Genre: {genreList}</p>
    </React.Fragment>
  )
}

const showTracks = (tracks) => {
  let random = Math.floor(Math.random() * tracks.length)
  let trackURL = `https://open.spotify.com/embed/track/${tracks[random]['id']}`
  return(
    <React.Fragment>
      <iframe src= {trackURL} width="75%" height="80px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </React.Fragment>
  )
}


export {showInfoModal, showTracks}