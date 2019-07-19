import React from 'react';
import './App.css';
import Router from './components/router/Router';
import NavBar from './components/home_page/NavBar';

function App() {
  return (
    <div className="App">
    <React.Fragment>
     <Router/>
     <NavBar/>
     </React.Fragment>

    </div>
  );
}

export default App;
