import styled from 'styled-components'

export const HomeContainer = styled.main`
  .resume-cards {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2rem;

    & p {
      text-align: center;
      font-weight: bold;
      color: ${(props) => props.theme.gray};
      font-size: 1.125rem;
    }

    & strong {
      display: block;
      text-align: center;
      color: ${(props) => props.theme.black};
      font-size: 2.5rem;
    }
  }

  .info-cards {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: stretch;
  }

  .chart-container {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    height: 100%;

    .chart {
      padding: 2rem;
    }

    .chart-container-card {
      padding: 1.5rem 0;
      border-left: 1px solid ${(props) => props.theme.divider};
      & p {
        text-align: center;
        font-weight: 600;
        color: ${(props) => props.theme.gray};
        font-size: 1rem;
      }

      & strong {
        display: block;
        text-align: center;
        color: ${(props) => props.theme.black};
        font-size: 1.5rem;
        margin: 0.5rem;
      }
    }

    .chart-container-card:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.divider};
    }
  }
`
