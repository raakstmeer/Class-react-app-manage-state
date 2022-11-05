import React, { useContext } from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import themeContext from './themeContext';

export default function Content() {
  const context = useContext(themeContext);
  const { theme, switchTheme } = context;
  console.log('this is content component');
  return (
    <div>
      <h1>This is Content Component</h1>
      <Counter
        render={(count, incrementcount) => (
          <HoverCounter
            count={count}
            incrementcount={incrementcount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      />
    </div>
  );
}
