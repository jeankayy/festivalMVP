import React from 'react'

class ArtistTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
  return (
    <div className = "artistTile">
    {this.props.artistName}
    </div>
  )
  }

}

export default ArtistTile;