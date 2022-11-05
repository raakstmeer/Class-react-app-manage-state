import React from 'react';

const withCounter = (OriginalComponent) => {
  class newComponent extends React.Component {
    state = { count: 0 };

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return (
        <div>
          <OriginalComponent count={count} incrementCount={this.incrementCount} />
        </div>
      );
    }
  }
  return newComponent;
};

export default withCounter;
