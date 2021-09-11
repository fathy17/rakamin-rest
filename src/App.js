import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        <Route path="/detail/:pokemonName">
          <Detail />
        </Route>
        <Route path="/">
          <Redirect to="/pokemon" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
