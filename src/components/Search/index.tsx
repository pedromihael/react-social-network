import React, { useCallback, useRef } from 'react';
import { MdSearch } from 'react-icons/md'
import { Container } from './styles';

interface Props {
  text: string;
}

const Search: React.FC<Props> = ({ text }) => {
  const input = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    // do submit
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit} role="search">
        <fieldset>
          <MdSearch size="2rem" />
          <input ref={input} id="search" type="search" placeholder={text} autoFocus required />
        </fieldset>
      </form>
    </Container>
  );
}

export default Search;