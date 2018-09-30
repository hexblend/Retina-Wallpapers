import React, { Component } from 'react';

// Assets
import './Assets/css/main.min.css';

// Components
import Form from './Components/Form';

const API_KEY = '1686e47585b8407987d325464925639fa05f1195fca4b2c201d4dae923a7f274';

class App extends Component {

  getInput = async (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    const api_call = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=1&query=${keyword}`);
    const data = await api_call.json();
    console.log(data);
  }


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Retina Wallpapers</h1>
          <p>Wallpapers perfect for your high-resolution screen.</p>
        </header>
        <div className="container body-container">
            <Form getInput={this.getInput}/>
        </div>
      </div>
    );
  }
}

export default App;
