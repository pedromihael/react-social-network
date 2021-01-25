import React from 'react';
import { User } from '../../../modules/types/User';

import { Container } from './styles';

interface Props {
    user: User;
}

const UserInfo: React.FC<Props> = ({ user }) => {
    return (
        <Container>{user.name}</Container>
    );
}

export default UserInfo;