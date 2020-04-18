import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
        <Route path="/" render={(props) => <Navbar {...props} />} />
        <Main />
    </div>
  );
}

export default App;
