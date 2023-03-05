import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface CardProps {
  children: ReactNode
  resetPadding?: boolean
}

export function Card({ children, resetPadding = false }: CardProps) {
  return <CardContainer resetPadding={resetPadding}>{children}</CardContainer>
}
