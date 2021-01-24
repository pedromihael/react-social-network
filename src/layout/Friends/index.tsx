import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Card } from '../../modules/components'
import AllUsersButton from '../../modules/components/AllUsersButton';
import { Container } from './styles';

import users from '../../mock';

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

  const [usersToDisplay, setUsersToDisplay] = useState(user.friends);
  const [isAllUsersDisplayed, setIsAllUsersDisplayed] = useState(false);

  const handleUsersDisplayed = useCallback(() => {
    if (isAllUsersDisplayed) {
      setUsersToDisplay(user.friends)
    } else {
      setUsersToDisplay(users as User[])
    }

    setIsAllUsersDisplayed(!isAllUsersDisplayed);

  }, [isAllUsersDisplayed]);

  useEffect(() => {
    setUsersToDisplay(user.friends);
  }, []);

  return (
    <Container>
      <header>
        <h3>Your friends</h3>
        <AllUsersButton onClick={handleUsersDisplayed} isAllUsersDisplayed={isAllUsersDisplayed} />
      </header>
      <main>
        {usersToDisplay.map((friend, index) => (
          <Card
            key={index}
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