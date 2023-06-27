import React from 'react';
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Counter from './components/Counter';
import Section from './components/Section';
// import ThemeContext from './contexts/themeContext';
import ThemeContext from './contexts/themeContext';

class App extends React.Component {
  state = {
    theme: 'dark',
    switchTheme: () => {
    this.setState(({ theme }) => {
      if(theme === 'dark') {
        return {
          theme: 'light'
        }
      } else {
        return {
          theme: 'dark'
        }
      }
    })
  }
  }

  render () {
    return (
      <>
        <Counter >
          {(count, handleCount) => (
            <ClickCounter count={count} handleCount={handleCount}/>
          )}
        </Counter>

        <ThemeContext.Provider value={this.state}>
          <Section/>
        </ThemeContext.Provider>
      </>
  );
  }
}

export default App;
