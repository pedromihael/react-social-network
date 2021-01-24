import styled from 'styled-components';

export const Container = styled.div`
  width: 289px;
  height: calc(1.5 * 289px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  display: grid;
  grid-template-rows: 1fr 0.7fr;

  .picture {
    width: 100%;
    height: 289px;
    background: ${props => props.theme.colors.primary};

    img {
      width: 100%;
    }
  }

  .content {
    display: flex;
    padding: 20px;
    flex-direction: column;
    height: 100%;

    .user {
      font-weight: 700;
      margin-bottom: 20px;
    }

    .user,
    .company,
    .phone {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .company,
    .phone {
      padding-left: 5px;
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
`;
