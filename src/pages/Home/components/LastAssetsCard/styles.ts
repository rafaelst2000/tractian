import styled, { css } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const LastAssetsCardContainer = styled.div`
  .title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;

    h4 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.black};
    }

    .see-all {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${(props) => props.theme.blue};
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme['side-menu-item-active']};
        transition: 0.2s;
      }
    }
  }

  .description-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`

export const Task = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  .asset-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-top: 1px solid ${(props) => props.theme.divider};
    margin: 0 -2rem;

    span {
      font-size: 0.875rem;
    }

    p {
      font-weight: 600;
      font-size: 1.125rem;
      color: ${(props) => props.theme.black};
      margin-left: 1rem;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }

    > div {
      display: flex;
      justify-content: flex-start;
      gap: 0.5rem;
      align-items: center;
    }
  }
`

export const StyledCheckbox = styled(Checkbox.Root)`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  box-shadow: inset 0 0 0 2px ${(props) => props.theme['gray-light']};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.checked &&
    css`
      box-shadow: inset 0 0 0 2px ${(props) => props.theme.blue};
      background-color: ${(props) => props.theme.blue};
    `}
`

interface PriorityProps {
  status: 'high' | 'medium' | 'low'
}

export const Priority = styled.strong<PriorityProps>`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  ${(props) =>
    props.status === 'high' &&
    css`
      background-color: ${(props) => props.theme.red};
    `}
`
