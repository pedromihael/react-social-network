import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  form {
    border-left: 1px solid ${props => props.theme.colors.alterColor};
    width: 30vw;
    height: 100%;

    fieldset {
      padding-left: 1rem;
      display: flex;
      align-items: center;
      height: 100%;
      border: none;

      svg {
        path {
          fill: ${props => props.theme.colors.alterColor};
        }
      }

      input {
        height: 100%;
        border: 0;
        font-size: 1.6rem;
        width: 100%;
        padding: 0 0.5rem;
        appearance: none;
      }
    }
  }
`;
