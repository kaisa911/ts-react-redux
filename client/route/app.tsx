import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Index from '../pages/index';

class App extends React.Component<{}> {
  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/index" component={Index} />
            <Route path="/" exact component={Index} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;