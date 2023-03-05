import styled, { css } from 'styled-components'

export const AssetsContainer = styled.main`
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`

interface SensorStatusProps {
  status: 'inAlert' | 'inDowntime' | 'inOperation'
}

export const SensorStatus = styled.strong<SensorStatusProps>`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  ${(props) =>
    props.status === 'inAlert' &&
    css`
      color: ${(props) => props.theme.yellow};
    `}

  ${(props) =>
    props.status === 'inOperation' &&
    css`
      color: ${(props) => props.theme.green};
    `}

  ${(props) =>
    props.status === 'inDowntime' &&
    css`
      color: ${(props) => props.theme.red};
    `}
`
