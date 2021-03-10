import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";

import SearchForm from "./containers/SearchForm";
import NavBar from "./components/NavBar";
import PhotoContainer from "./containers/PhotoContainer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container">
      <SearchForm />
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
