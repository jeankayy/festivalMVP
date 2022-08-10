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
          number: 1,
          currentPage: ArtistList
        })
      })
      .catch((err) => console.log(err))
  }



  render() {

    return (

    <div className = "app">
        <this.state.currentPage festival={this.state.festival} number={this.state.number} handleChange={this.handleChange} handleFormClick={this.handleFormClick} artists = {this.state.artists}/>
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