import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/about" exact component={About} />
        <Route path="/movieDetails" exact component={MovieDetails} />
        <Route path="/actorDetails" exact component={ActorDetails} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
