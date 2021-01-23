import React from 'react';

import { Container } from './styles';

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      {title}
      <div>
        {/* <Icon /> */}
        {/* <Icon /> */}
        {/* <Search /> */}
      </div>
    </Container>
  );
}

export default Header;