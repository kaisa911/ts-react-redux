import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Demo from '../pages/demo/index';
import Index from '../pages/index';


class App extends React.Component<any, {}> {
  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/demo" component={Demo} />
            <Route path="/" component={Index} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
