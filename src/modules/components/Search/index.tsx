import React, { useCallback, useRef, useState } from 'react';
import { MdSearch } from 'react-icons/md'
import { Container } from './styles';

interface Props {
  text: string;
}

const Search: React.FC<Props> = ({ text }) => {
  const inputRef = useRef(null);
  const [itemToSearch, setItemToSearch] = useState('');

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setItemToSearch(e.target.value);

    // usar context provider aqui chamar uma funcao que faz a pesquisa do user
  }, []);

  return (
    <Container>
      <form onChange={handleSearch} role="search">
        <fieldset>
          <MdSearch size="2rem" />
          <input ref={inputRef} id="search" type="search" placeholder={text} autoFocus required />
        </fieldset>
      </form>
    </Container>
  );
}

export default Search;