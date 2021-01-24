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

  @media (max-width: 700px) {
    padding: 0 20px 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 40px 0;

    svg {
      width: 2rem;
      height: 2rem;
    }

    span {
      text-align: center;
    }
  }
`;
