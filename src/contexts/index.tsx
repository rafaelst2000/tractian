import { ReactNode } from 'react'
interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <div>{children}</div>    
  )
}