import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background: ${props => props.theme.colors.lightBackground};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  height: 15vh;

  > a {
    text-decoration: none;
    cursor: pointer;

    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 60px;
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      padding: 10px 40px;
    }
  }

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      path {
        fill: ${props => props.theme.colors.alterColor};
      }
    }
  }

  @media (max-width: 700px) {
    > a {
      h1 {
        font-size: 45px;
        padding: 10px 20px;
      }
    }

    position: relative;
    margin-bottom: 60px;

    > div {
      svg {
        margin-right: 20px;
      }

      .search {
        position: absolute;
        bottom: -80%;
        left: 0;

        input {
          height: 50%;
        }
      }
    }
  }
`;
