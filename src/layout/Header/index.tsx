import React from 'react';
import { Search } from '../../components'
import { Container } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        {/* <Icon /> */}
        {/* <Icon /> */}
        <Search text="Searching for..." />
      </div>
    </Container>
  );
};

export default Header;
