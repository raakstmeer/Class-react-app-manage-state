/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Section from './ContextAPI/Section';
import ThemeContext from './ContextAPI/themeContext';

class App extends React.Component {
  state = { theme: 'light' };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === 'light') {
        return { theme: 'dark' };
      }
      return { theme: 'light' };
    });
  };

  render() {
    console.log('this is app component');
    const { theme } = this.state;
    return (
      <div>
        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
