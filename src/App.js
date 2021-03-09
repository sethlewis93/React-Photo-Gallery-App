import React, {useContext} from 'react';
/**
 * https://teamtreehouse.com/library/redirecting-a-route
 */
import {Switch, Route} from 'react-router-dom';
import './css/App.css';


import { UserContext } from './UserContext';
import SearchForm from './containers/SearchForm'
import NavBar from './components/NavBar'
import PhotoContainer from './containers/PhotoContainer'
import NotFound from './components/NotFound'


function App() {

  const {performSearch} = useContext(UserContext)

  return (
    <div className="container">
      <SearchForm onSearch={performSearch}/>
      <NavBar />

      <Switch>

        <Route exact path="/">
          <PhotoContainer />
        </Route>

        <Route path="/:userQuery">
          <PhotoContainer />
        </Route>

        <Route component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
