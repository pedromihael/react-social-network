import React, { useContext, useEffect, useState } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './state/hooks/usePersistedState';
import { light, dark } from './themes';
import GlobalTheme from './base/global';
import { Container } from './App.styles';
import { Header, Friends, Footer } from './layout';
import { Greeting } from './modules/components';

import FriendsProvider, { FriendsContext } from './state/contexts/FriendsContext';

import users from './mock';
import { User } from './modules/types/User';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const {
    getAllUsers,
    getFriends,
    getUsersByName,
    usersToDisplay,
  } = useContext(FriendsContext);

  console.log(usersToDisplay)

  const user: any = users.find(thisUser => thisUser.name === 'Dotson Jennings');

  return (
    <ThemeProvider theme={theme}>
      <FriendsProvider>
        <Container>
          <GlobalTheme />
          <Header text="MySocial" toggleTheme={handleThemeSwitching} />
          <Greeting text={user.greeting} />
          <Friends user={user} />
          <Footer />
        </Container>
      </FriendsProvider>
    </ThemeProvider>
  );
}

export default App;
