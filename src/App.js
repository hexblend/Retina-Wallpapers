import React, { Component } from 'react';

// Assets
import './Assets/css/main.min.css';

// Components
import Titles from './Components/Titles';
import Form from './Components/Form';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="center-elements">
          <Titles />
          <Form />
        </div>
        <div className="credentials">
          <p>An app by <a href="vladb.uk">Vlad Bibire</a></p>
          <p>Photo library by <a href="unsplash.com">Unsplash</a></p>
          <p>&copy; 2018 Retina Wallpapers</p>
        </div>
      </div>
    );
  }
}

export default App;
