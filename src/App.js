import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { StaticContext } from './context/StaticContext'
import Home from './components/Home'
import { css } from 'emotion'

function App() {
  return (
    <StaticContext>
      <div className={appStyle}>
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

const appStyle = css({
  margin: '0',
  padding: '0',
  backgroundColor: '#F0F0F0',
  '@media (max-width: 460px)' :{
    margin:'20px'
  }
})

export default App;
