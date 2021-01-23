import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background: ${(props) => (props.theme.title === 'light' ? props.theme.colors.white : props.theme.colors.darkGrey)};
`;
