import styled, { css } from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox';

export const LastAssetCardContainer = styled.div`

  .title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;

    h4 {
      font-size: 1.125rem;
      color: ${props => props.theme.black};
    }

    span {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${props => props.theme.blue};
      cursor: pointer;
    }
  }
`

export const Task = styled.div`
  margin-top: 1.5rem;
  .checkbox-section {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    p {
      font-weight: 600;
      font-size: 0.875rem;
      color: ${props => props.theme.black};
      margin-left: 1rem;
    }
    border-top: 1px solid ${props => props.theme.divider};
    margin: 0 -2rem;
  }
  width: 100%;
`

export const StyledCheckbox = styled(Checkbox.Root)`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  box-shadow: inset 0 0 0 2px ${props => props.theme['gray-light']};;
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

  ${(props) => props.checked && css`
    box-shadow: inset 0 0 0 2px ${props => props.theme['blue']};;
    background-color: ${props => props.theme['blue']};
  `
  }
`
