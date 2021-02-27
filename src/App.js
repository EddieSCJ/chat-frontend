import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarterPage from "./pages/StarterPage/";
import ChatPage from './pages/ChatPage/'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <StarterPage/>
        </Route>
        <Route exact path={"/chat"}>
          <ChatPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
