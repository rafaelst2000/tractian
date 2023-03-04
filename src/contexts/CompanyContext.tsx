import { createContext, ReactNode, useEffect, useState } from "react";
import { Company } from "../@types";


interface CompanyContextType {
  companies: Company[]
  getCompanyNameById: (companyId: number) => string
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

  function getCompanyNameById(id: number) { 
    const company = companies.findIndex(company => company.id === id)
    return companies[company].name
  }
 
  useEffect(() => {
    loadCompanies()
  }, [])

  return (
    <CompanyContext.Provider value={{ companies, getCompanyNameById }}>
      {children}
    </CompanyContext.Provider>
  )
}