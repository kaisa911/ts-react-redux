import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../pages/index';

class App extends React.Component<any, {}> {
  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/index" component={Index} />
            <Route path="/" component={Index} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
