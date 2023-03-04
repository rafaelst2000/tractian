import { createContext, ReactNode, useEffect, useState } from "react";
import { Company } from "../@types";


interface CompanyContextType {
  companies: Company[]
}

interface CompanyProviderProps {
  children: ReactNode
}

export const CompanyContext = createContext<CompanyContextType>({} as CompanyContextType)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function CompanyContextProvider({ children }: CompanyProviderProps) {
  const [companies, setCompanies] = useState<Company[]>([])

  async function loadCompanies() {
    const response = await fetch(`${baseUrl}/companies`)
    const data = await response.json() as Company[]

    setCompanies(data)
  }
 
  useEffect(() => {
    loadCompanies()
  }, [])

  return (
    <CompanyContext.Provider value={{ companies }}>
      {children}
    </CompanyContext.Provider>
  )
}