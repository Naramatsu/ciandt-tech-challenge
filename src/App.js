import "./App.style.scss";
import Main from "./components/Main";
import AppState from "./context/AppState";
import { Route, Switch } from "react-router-dom";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <img className="pokedex__logo" src="pokedex.png" alt="logo" />
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
