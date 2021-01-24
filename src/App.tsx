import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { light, dark } from './themes';
import GlobalTheme from './base/global';
import { usePersistedState } from './state/hooks/usePersistedState';

import FriendsProvider from './state/contexts/FriendsContext';
import Home from './layout/pages/Home/Home';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <FriendsProvider>
        <GlobalTheme />
        <Home handleThemeSwitching={handleThemeSwitching} />

      </FriendsProvider>
    </ThemeProvider>
  );
}

export default App;
