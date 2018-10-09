import React, { Component } from 'react';

// Assets
import './Assets/css/main.min.css';

// Components
import Titles from './Components/Titles';
import Form from './Components/Form';
import Credentials from './Components/Credentials';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="center-elements">
          <Titles />
          <Form />
        </div>
        <Credentials />
      </div>
    );
  }
}

export default App;
