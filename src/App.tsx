import React from 'react'

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';
import { light, dark } from './base/themes';
import GlobalTheme from './base/global'
import { Container } from './styles'
import { Header, Friends } from './layout'
import { Greeting } from './components'

import users from './mock';

type User = {
  _id: string;
  index: number;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  greeting: string;
  friends: User[];
}

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  const foundUser = users.find(user => user.name === 'Dotson Jennings')
  const user = foundUser as User;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalTheme />
        <Header text="MySocial" toggleTheme={handleThemeSwitching} />
        <Greeting text={user.greeting} />
        <Friends user={user} />
      </Container >
    </ThemeProvider >

  );
}

export default App;
