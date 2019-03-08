import * as React from 'react';

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<{}> {
  public render() {
    return (
      <div>
        <h1>Hello TypeScript!</h1>
        <div>lalala</div>
      </div>
    );
  }
}
