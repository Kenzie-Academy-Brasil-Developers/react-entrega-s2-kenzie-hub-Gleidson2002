
import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
import Home from './Pages/Home';


function App() {
  const history = useHistory()
  
  return (

  <Switch>
    <Route exact path="/">
     <Login history={history}/>
    </Route>
    <Route exact path="/cadastro">
      <Cadastro history={history}/>
    </Route>
    <Route exact path="/home">
     <Home history={history}/>
    </Route>
   </Switch>

  );
}

export default App;
