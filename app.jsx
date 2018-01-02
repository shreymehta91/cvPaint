import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaintCanvas from './components/PaintCanvas';
import DashBoard from './components/DashBoard';
import { Appbar, Container, Panel } from 'muicss/react';
import 'muicss/dist/css/mui.css';

const headerStyle = {
    fontSize:'22px',
    paddingLeft:'20px'
}
const containerStyle = {
  marginTop: '20px'
}
const App = () => (
  <div>
    <Appbar>
      <div className="mui--appbar-height mui--appbar-line-height" style={headerStyle}>Canvas Paint</div>
    </Appbar>
    <Container fluid={true}>
      <BrowserRouter>
        <div className="app" style={containerStyle}>
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
