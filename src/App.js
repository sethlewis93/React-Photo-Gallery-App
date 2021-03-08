import React from 'react';
/**
 * https://teamtreehouse.com/library/redirecting-a-route
 */
import {Switch, Route} from 'react-router-dom';
import './css/App.css';


import SearchForm from './containers/SearchForm'
import NavBar from './components/NavBar'
import PhotoContainer from './containers/PhotoContainer'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className="container">
      <SearchForm />
      <NavBar />

      <Switch>

        <Route exact path="/photos">
          <PhotoContainer />
        </Route>

        <Route path="/photos/:userQuery">
          <PhotoContainer />
        </Route>

        <Route component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
