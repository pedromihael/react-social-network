import React from 'react';

import GlobalTheme from './base/global'
import { Container } from './styles'

function App() {
  return (
    <Container>
      <GlobalTheme />
      <Header title="MySocial" />
      <Content>
        <Greeting user={"Patti Mckenzie"} />
        <FriendsSection user={"Patti Mckenzie"} /> vem de section
      </Content>
    </Container>
  );
}

export default App;
