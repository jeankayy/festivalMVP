import { createRoot } from 'react-dom/client';
import React from 'react';
import axios from 'axios';
import DiscoverForm from './discoverForm.jsx';
import ArtistList from './artistList.jsx';
import './styles.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      festival: 'ACL 2022 Weekend 1',
      number: 5,
      currentPage: DiscoverForm
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
      'number': 5,
      'festival': this.state.festival
    }
    axios.get('/artists', { params })
      .then((res) => {
        var data = res.data
        var updateArtists = []
        data.forEach((artist) => { updateArtists.push(artist) })
        this.setState({
          artists: updateArtists,
          number: 1,
          currentPage: ArtistList
        })
      })
      .catch((err) => console.log(err))
  }

  removeArtist = (name) => {
    let params = {
      'number': this.state.number,
      'festival': this.state.festival
    }
    axios.get('/artists', { params })
      .then((res) => {
        console.log(name)
        var data = res.data[0]
        var current = this.state.artists;
        var updateArtists = []
        current.forEach((artist) => { if(artist.artist_name !== name){updateArtists.push(artist)}})
        updateArtists.push(data);
        this.setState({
          artists: updateArtists,
        })
      })
      .catch((err) => console.log(err))
  }

  back = (event) => {
    this.setState({
      artists: [],
      festival: 'ACL 2022 Weekend 1',
      number: 5,
      currentPage: DiscoverForm
    })
  }

  render() {

    return (
    <div className = "app">
        <this.state.currentPage festival={this.state.festival} number={this.state.number} handleChange={this.handleChange} handleFormClick={this.handleFormClick} artists = {this.state.artists} removeArtist = {this.removeArtist} festival = {this.state.festival} back = {this.back}/>
    </div>
    )

  }
}

const root1 = document.createElement("div");
root1.setAttribute("id", "app-container");
document.body.appendChild(root1);
const container = document.getElementById("app-container");
const root = createRoot(container)
root.render(<App />)

export default App;