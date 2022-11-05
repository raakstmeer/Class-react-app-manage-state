/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import withCounter from './withCounter';

function HoverCount(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  );
}

export default withCounter(HoverCount);
