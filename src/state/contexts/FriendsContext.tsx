import React, { createContext, useState } from 'react';

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
}

export const FriendsContext = createContext({} as IContextProps);


const FriendsProvider: React.FC<Props> = ({ children }) => {
    const [usersToDisplay, setUsersToDisplay] = useState(users);
    const [logged, setLogged] = useState('');

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
        const foundUsers = users.filter(user => user.name.match(userName));
        const friends = foundUsers.length ? foundUsers as User[] : [];
        setUsersToDisplay(friends);

        return friends;
    }

    return (
        <FriendsContext.Provider value={{
            usersToDisplay,
            getAllUsers,
            getFriends,
            getUsersByName,
            loggedUser: getLoggedUser(),
            setLoggedUser,
        }}>
            {children}
        </FriendsContext.Provider>
    )
}

export default FriendsProvider;