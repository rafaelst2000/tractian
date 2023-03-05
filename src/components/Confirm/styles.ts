import { Trash } from 'phosphor-react'
import styled from 'styled-components'

export const RemoveIcon = styled(Trash)`
  cursor: pointer;
  color: ${(props) => props.theme.black} !important;
  &:hover {
    transition: 0.2s;
    color: ${(props) => props.theme.red} !important;
  }
`
