import React from 'react'

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';
import { light, dark } from './base/themes';

import GlobalTheme from './base/global'
import { Container } from './styles'

import { Header } from './layout'
// import { Greeting } from './components'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>

      <Container>
        <GlobalTheme />
        <Header title="MySocial" />
        {/* <Greeting user={"Patti Mckenzie"} /> */}
        {/* <Friends user={"Patti Mckenzie"} /> */}
      </Container >
    </ThemeProvider >

  );
}

export default App;
