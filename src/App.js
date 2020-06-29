import React,{ Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {StaticContext} from './context/StaticContext'

import Home from './components/Home'

function App() {
  return (
    <StaticContext>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content"></section>
          <Router> 
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </StaticContext>
  );
}

export default App;
