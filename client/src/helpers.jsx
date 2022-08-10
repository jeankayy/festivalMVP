import React from 'react';

const showInfoModal = (infoObject, tracks) => {
  let genres = infoObject.genres
  let image = infoObject.images[0]['url']
  let genreList = ''

  genres.forEach(genre => {genreList = genreList + ' ' + genre})

  console.log('genres', genres)
  console.log('image', image)
  return (
    <React.Fragment>
      Artist: {infoObject.name}
      Genre: {genreList}
    </React.Fragment>
  )
}

const showTracks = (tracks) => {
  let random = Math.floor(Math.random() * tracks.length)
  let random2 = Math.floor(Math.random() * tracks.length)
  let random3 = Math.floor(Math.random() * tracks.length)
  while(random2 === random){
    random2 = Math.floor(Math.random() * tracks.length)
  }
  while(random3 === random2 || random3 === random){
    random3 = Math.floor(Math.random() * tracks.length)
  }
  let trackURL = `https://open.spotify.com/embed/track/${tracks[random]['id']}`
  let trackURL1 = `https://open.spotify.com/embed/track/${tracks[random2]['id']}`
  let trackURL2 = `https://open.spotify.com/embed/track/${tracks[random3]['id']}`

  return(
    <React.Fragment>
      <iframe src= {trackURL} width="75%" height="80px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe src= {trackURL1} width="75%" height="80px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe src= {trackURL2} width="75%" height="80px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </React.Fragment>
  )
}


export {showInfoModal, showTracks}