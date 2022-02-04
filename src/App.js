import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from "./RouteComponents/MovieRoute/MovieList/MovieList";

function App() {
  return (
    <Router>
      <div className="App">
        <MovieList />
      </div>
    </Router>
  );
}

export default App;
