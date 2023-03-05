import styled, { css } from 'styled-components'

interface CardContainerProps {
  resetPadding: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.divider};

  ${(props) =>
    props.resetPadding &&
    css`
      padding: unset;
    `};
`
