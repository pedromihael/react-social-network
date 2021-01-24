import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import { Container } from './styles';

const Greeting: React.FC = () => {
  return (
    <Container>
      <FaHandPeace size="1.6rem" />
      <span>
        Hello, Pedro! You have 7 unread messages.
      </span>
    </Container>
  );
}

export default Greeting;