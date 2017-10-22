import React, { Component } from 'react';
import UserTable from './UserTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">React Table!</h1>
            <p className="lead">This incredible table was made using <a href="https://reactjs.org/">React</a>, <a href="http://rubyonrails.org/">Rails</a>, <a href="https://getbootstrap.com/docs/3.3/">Bootstrap</a>, and <a href="https://github.com/react-tools/react-table">React Table</a>.</p>
          </div>
          <UserTable />
        </div>
      </div>
    );
  }
}

export default App;
