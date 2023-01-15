import "./style/styles.css";
import "./style/search.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./pages/notFound";
import Projects from "./pages/Projects";
import Home from "./pages/home";
import ImagesPage from "./pages/imagesPage";
import SearchResults from "./pages/SearchResults";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/images" component={ImagesPage} />
          <Route path="/searchResults" component={SearchResults} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
