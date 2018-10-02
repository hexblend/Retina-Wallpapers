import React, { Component } from 'react';

// Assets
import './Assets/css/main.min.css';

// Components
import Titles from './Components/Titles';
import Form from './Components/Form';

class App extends Component {
  render() {
    return (
      <div>
          <Titles />
          <Form />
      </div>
    );
  }
}

export default App;
