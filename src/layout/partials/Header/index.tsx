import React from 'react';
import { MdNotifications } from 'react-icons/md'
import { Search, Switch } from '../../../modules/components'
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ text, toggleTheme }) => {

  return (
    <Container>
      <Link to="/">
        <h1>{text}</h1>
      </Link>
      <div>
        <Switch toggleTheme={toggleTheme} />
        <MdNotifications size="2rem" />
        <Search className="search" text="Searching for..." />
      </div>
    </Container>
  );
};

export default Header;
