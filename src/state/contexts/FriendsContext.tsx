import React, { createContext, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

import users from '../../mock';
import { User } from '../../modules/types/User';

interface Props {
  children: any;
}

interface IContextProps {
  usersToDisplay: any[];
  getAllUsers(): User[];
  getFriends(userName: string): User[] | [];
  getUsersByName(name: string): User[] | [];
  loggedUser: User | any;
  setLoggedUser(name: string): void;
  searchedUser: string;
  setSearched: (name: string) => void;
  getFriendsByName: (userName: string, searched: string) => User[] | [];
  getUserById: (id: string) => User;
}

export const FriendsContext = createContext({} as IContextProps);


const FriendsProvider: React.FC<Props> = ({ children }) => {
  const [usersToDisplay, setUsersToDisplay] = useState(users);
  const [logged, setLogged] = useState('');
  const [searchedUser, setSearchedUser] = useState('');

  const getLoggedUser = (): User | any => {
    const result = users.find(user => user.name === logged);
    return result ? result as User : undefined;
  }

  const setLoggedUser = (name: string): void => setLogged(name);

  const getAllUsers = (): User[] => {
    setUsersToDisplay(users);
    return users as User[];
  }

  const getFriends = (userName: string): User[] | [] => {
    const foundUser = users.find(thisUser => thisUser.name === userName);
    if (foundUser) {
      setUsersToDisplay(foundUser.friends as User[]);
      return foundUser.friends as User[];
    } else {
      setUsersToDisplay(users);
      return users as User[];
    }
  }

  const getUsersByName = (userName: string): User[] | any[] => {
    // TODO: trocar por consulta na API
    let found = users.filter(thisUser => thisUser.name === userName) as User[];

    if (!found.length) {
      for (const user of users) {
        const friends = user.friends.filter(item => item.name.match(userName));
        if (friends.length !== 0) {
          found = friends as User[];
          break;
        }
      }
    }

    const friends = found.length ? found as User[] : [];
    setUsersToDisplay(friends);

    return friends;
  }

  const getFriendsByName = (userName: string, searched: string): User[] | [] => {
    // TODO: trocar por consulta na API
    const user = users.find(thisUser => thisUser.name === userName) as User;
    const foundUsers = user.friends.filter(user => user.name.match(searched)) as User[];

    const friends = foundUsers.length ? foundUsers as User[] : [];

    return friends;
  }

  const getUserById = (id: string): User => {
    let found = users.find(thisUser => thisUser._id === id) as User;

    if (!found) {
      for (const user of users) {
        const friend = user.friends.find(item => item._id === id);
        if (friend) {
          found = friend as User;
          break;
        }
      }
    }

    return found as User;
  }

  const setSearched = (name: string) => {
    setSearchedUser(name);
  }

  return (
    <FriendsContext.Provider value={{
      usersToDisplay,
      getAllUsers,
      getFriends,
      getUsersByName,
      loggedUser: getLoggedUser(),
      setLoggedUser,
      searchedUser,
      setSearched,
      getFriendsByName,
      getUserById
    }}>
      {children}
    </FriendsContext.Provider>
  )
}

export default FriendsProvider;