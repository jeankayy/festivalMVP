import { createRoot } from 'react-dom/client';
import React from 'react';
import axios from 'axios';
import DiscoverForm from './discoverForm.jsx';
import ArtistList from './artistList.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      festival: 'ACL 2022 Weekend 1',
      number: 5,
    }
  }

  handleChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    let updated = this.state;
    updated[key] = value;
    this.setState(updated)
  }

  handleFormClick = (event) => {
    event.preventDefault();
    let params = {
      'number': this.state.number,
      'festival': this.state.festival
    }
    axios.get('/artists', { params })
      .then((res) => {
        var data = res.data
        console.log('res data', data)
        var updateArtists = this.state.artists;
        data.forEach((artist) => { updateArtists.push(artist) })
        this.setState({
          artists: updateArtists,
          number: 1
        })
      })
      .catch((err) => console.log(err))
  }

  render() {

    return (

    <div>
        <DiscoverForm festival={this.state.festival} number={this.state.number} handleChange={this.handleChange} handleFormClick={this.handleFormClick} />
        <ArtistList artists = {this.state.artists}/>
      </div>
    )

  }
}

const root1 = document.createElement("div");
root1.setAttribute("id", "app");
document.body.appendChild(root1);
const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />)

export default App;