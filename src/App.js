import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetail from "./RouteComponents/MovieRoute/MovieDetails/MovieDetail";
import MovieList from "./RouteComponents/MovieRoute/MovieList/MovieList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/:id"  component={MovieDetail} />
          <Route path="/" exact component={MovieList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
