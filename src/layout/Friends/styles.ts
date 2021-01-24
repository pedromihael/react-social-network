import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 0 120px;

  header {
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.color};

    h3 {
      font-family: 'Bebas Neue', cursive;
      font-size: 33px;
      padding-bottom: 10px;
    }
  }

  main {
    padding-top: 20px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;
