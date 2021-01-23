import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background: ${(props) => props.theme.colors.lightBackground};

  > h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 60px;
    font-family: 'Bebas Neue', cursive;
  }
`;
