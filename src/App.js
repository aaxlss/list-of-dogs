import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import Layout from './components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/favorites' component={Favorites}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)


export default App;
