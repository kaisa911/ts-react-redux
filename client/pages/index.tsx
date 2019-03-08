import * as React from 'react';

class Hello extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  public render() {
    return (
      <div>
        <h1>Hello TypeScript!</h1>
        <div>lalala</div>
      </div>
    );
  }
}

export default Hello;
