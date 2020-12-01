import React from 'react';
import Home from './component/Home';
import Result from './component/Result';

import { BrowserRouter as 
  Router, 
  Route, 
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:name" component={Result} />
      </Switch>
    </Router>
  );
}

export default App;
