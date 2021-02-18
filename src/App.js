import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarterPage from "./pages/StarterPage/"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <StarterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
