import styled from 'styled-components';

export const Container = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  svg {
    path {
      fill: ${props => props.theme.colors.alterColor};
    }
  }

  span {
    font-weight: 700;
  }
`;
