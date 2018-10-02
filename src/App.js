import React, { Component } from 'react';
import './Assets/css/main.min.css';
import Form from './Components/Form';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Landing</h1>
          <p>Wallpapers perfect for your high-resolution screen.</p>
        </header>

        <div className="container-fluid body-container">
          <div className="row">

            <Form />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
