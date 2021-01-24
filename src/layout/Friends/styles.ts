import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  width: 100%;
  padding: 0 120px;

  header {
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.color};
    display: flex;
    justify-content: space-between;

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

  @media (max-width: 700px) {
    padding: 0 40px;

    main {
      grid-template-columns: 1fr;
    }
  }
`;
