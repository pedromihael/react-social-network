import React from 'react';
import { MdNotifications } from 'react-icons/md'
import { Search, Switch } from '../../../modules/components'
import { Container } from './styles';


interface Props {
  text: string;
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ text, toggleTheme }) => {

  return (
    <Container>
      <h1>{text}</h1>
      <div>
        <Switch toggleTheme={toggleTheme} />
        <MdNotifications size="2rem" />
        <Search text="Searching for..." />
      </div>
    </Container>
  );
};

export default Header;
