import { useContext } from 'react'
import { CompanyContext } from '../contexts/CompanyContext'

export function useCompany() {
  const context = useContext(CompanyContext)
  return context
}
