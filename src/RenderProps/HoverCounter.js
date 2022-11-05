/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
      </div>
    );
  }
}
