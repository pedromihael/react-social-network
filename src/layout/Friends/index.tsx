import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Card } from '../../modules/components'
import AllUsersButton from '../../modules/components/AllUsersButton';
import { Container } from './styles';

import users from '../../mock';
import { User } from '../../modules/types/User';
import { FriendsContext } from '../../state/contexts/FriendsContext';

interface Props {
  user: User;
}

const Friends: React.FC<Props> = ({ user }) => {
  const [usersToDisplay, setUsersToDisplay] = useState([] as User[]);
  const [isAllUsersDisplayed, setIsAllUsersDisplayed] = useState(false);

  const handleUsersDisplayed = useCallback(() => {
    if (isAllUsersDisplayed) {
      setUsersToDisplay(user.friends)
    } else {
      setUsersToDisplay(users as User[])
    }

    setIsAllUsersDisplayed(!isAllUsersDisplayed);

  }, [isAllUsersDisplayed]);

  const friendsContext = useContext(FriendsContext);

  useEffect(() => {
    setUsersToDisplay(friendsContext.getFriends(user.name));
  }, [user]);

  return (
    <Container>
      <header>
        <h3>Your friends</h3>
        <AllUsersButton onClick={handleUsersDisplayed} isAllUsersDisplayed={isAllUsersDisplayed} />
      </header>
      <main>
        {usersToDisplay.map((friend: User, index: number) => (
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