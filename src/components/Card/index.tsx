import React from 'react';
import { MdPerson, MdWork, MdCall } from 'react-icons/md'
import Button from '../Button';
import { Container } from './styles';

interface Props {
  name: string;
  age: number;
  company: string;
  phone: string;
  picture: string;
}

const Card: React.FC<Props> = ({ name, age, company, phone, picture }) => {
  return (
    <Container>
      <div className="picture" >
        <img src={picture} />
        <div className="cover">SEE MORE</div>
      </div>
      <div className="content" >
        <div className="user">
          <MdPerson size="1.6rem" />
          <span>{name}, {age}</span>
        </div>
        <div className="company">
          <MdWork size="1rem" />
          <span>Works at {company}</span>
        </div>
        <div className="phone">
          <MdCall size="1rem" />
          <span>{phone}</span>
        </div>
        <Button>SEE MORE</Button>
      </div>
    </Container>
  );
}

export default Card;