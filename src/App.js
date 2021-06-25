import React from 'react';
import './App.css';
import Home from './pages/index';
import Download from './pages/download'
import About from './pages/about'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fonts from './fonts/fonts'


function App() {
  return (
    <BrowserRouter>
    <Fonts />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/download'>
          <Download />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/gitlab' component={() => { 
          window.location.href = 'https://gitlab.com/croco-os'; 
          return null;
          }}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
