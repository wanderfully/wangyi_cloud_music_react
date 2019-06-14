import * as React from 'react';
import './App.css';
import Rout from './router/router'
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Rout></Rout>
      </div>
    );
  }
}

export default App;
