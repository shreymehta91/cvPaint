import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaintCanvas from './components/PaintCanvas';
import DashBoard from './components/DashBoard';
import { Appbar, Container, Panel } from 'muicss/react';
import 'muicss/dist/css/mui.css';
const App = () => (
  <div>
    <Appbar>Canvas Paint</Appbar>
    <Container>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/draw/:paintId" component={PaintCanvas} />
            <Route path="/draw" component={PaintCanvas} />
            <Route component={DashBoard} />
          </Switch>
        </div>
      </BrowserRouter>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
