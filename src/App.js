import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/Nav';
import Articles from './containers/Articles';
import Article from './containers/Article';
import Category from './containers/Category';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/article/:id" component={Article} exact />
          <Route path="/category/:id" component={Category} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
