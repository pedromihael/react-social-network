import React, { useMemo } from 'react';
import { Card } from '../../components'
import { Container } from './styles';

interface Props {
  user: User;
}
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

const Friends: React.FC<Props> = ({ user }) => {

  return (
    <Container>
      <header>
        <h3>Your friends</h3>
      </header>
      <main>
        {user.friends.map(friend => (
          <Card
            name={friend.name}
            age={friend.age}
            company={friend.company}
            phone={friend.phone}
            picture={friend.picture}
          />
        ))}
      </main>
    </Container>
  );
}

export default Friends;