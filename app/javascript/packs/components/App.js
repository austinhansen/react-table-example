import React, { Component } from 'react';
import UserTable from './UserTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Table!</h1>
        </header>
        <UserTable />
      </div>
    );
  }
}

export default App;
