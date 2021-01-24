import React, { useContext } from 'react';
import { MdNotifications } from 'react-icons/md'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade, lighten } from 'polished';

import { Search } from '../../components'
import { Container } from './styles';

interface Props {
  text: string;
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ text, toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>{text}</h1>
      <div>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onHandleColor={lighten(0.25, colors.alterColor)}
          offHandleColor={colors.alterColor}
          offColor={shade(0.25, colors.alterColor)}
          onColor={colors.alterColor}
        />
        <MdNotifications size="2rem" />
        <Search text="Searching for..." />
      </div>
    </Container>
  );
};

export default Header;
