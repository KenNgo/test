import React, { Component } from 'react';
import fire from './scripts/firebase/firebase';
import UploadFile from './scripts/UploadFile';

class App extends Component {
  render() {
    return (
      <div className="app">
      	<UploadFile />
      </div>
    );
  }
}

export default App;