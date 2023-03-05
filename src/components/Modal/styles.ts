import { NotePencil } from 'phosphor-react'
import styled from 'styled-components'

export const EditIcon = styled(NotePencil)`
  cursor: pointer;
  color: ${(props) => props.theme.black} !important;
  &:hover {
    transition: 0.2s;
    color: ${(props) => props.theme.blue} !important;
  }
`
