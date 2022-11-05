/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

function HoverCounter({ count, incrementcount, theme, switchTheme }) {
  const style = theme === 'dark' ? { backgroundColor: 'tomato' } : null;
  console.log('this is hover component');
  return (
    <div>
      <h1 style={style} onMouseOut={incrementcount}>
        Hover {count} times
      </h1>
      <button type="button" onClick={switchTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default HoverCounter;
