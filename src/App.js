import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          Hello World
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
