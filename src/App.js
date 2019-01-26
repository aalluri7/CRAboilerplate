import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import AddTodo from './containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reawefload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <AddTodo />
          </header>
        </Provider>
      </div>
    );
  }
}

export default App;
