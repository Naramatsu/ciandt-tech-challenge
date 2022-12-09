import "./App.css";
import Main from "./components/Main";
import AppState from "./context/AppState";
import { Route, Switch } from "react-router-dom";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <AppState>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/overview/:id">
            <Overview />
          </Route>
        </Switch>
      </AppState>
    </div>
  );
}

export default App;
