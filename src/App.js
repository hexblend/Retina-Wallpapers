import React, { Component } from 'react';

// Assets
import './Assets/css/main.min.css';

// Components
import Form from './Components/Form';
import Photos from './Components/Photos';

const API_KEY = '1686e47585b8407987d325464925639fa05f1195fca4b2c201d4dae923a7f274';

class App extends Component {
  state = {
    photos: []
  }

  getInput = async (e) => {
    const keyword = e.target.elements.keyword.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=1&query=${keyword}&orientation=landscape&per_page=40&order_by=popular`);
    const data = await api_call.json();
    this.setState({ photos: data.results });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Retina Wallpapers</h1>
          <p>Wallpapers perfect for your high-resolution screen.</p>
        </header>
        <div className="container-fluid body-container">
          <div className="row">

            <Form getInput={this.getInput}/>
            <Photos getPhotos={this.state.photos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
