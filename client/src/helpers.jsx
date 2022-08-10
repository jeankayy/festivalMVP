import React from 'react';

const showInfoModal = (infoObject) => {
  console.log(infoObject, 'info')
  var genres = infoObject.genres
  var image = infoObject.images[0]['url']
  var genreList = ''
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


export {showInfoModal}