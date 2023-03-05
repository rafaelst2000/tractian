import { createContext, ReactNode, useEffect, useState } from 'react'
import { Company } from '../@types'

interface CompanyContextType {
  companies: Company[]
  loadingCompanies: boolean
  getCompanyNameById: (companyId: number) => string
  editCompany: (company: Company) => void
  deleteCompany: (companyId: number) => void
}

interface CompanyProviderProps {
  children: ReactNode
}

export const CompanyContext = createContext<CompanyContextType>(
  {} as CompanyContextType,
)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function CompanyContextProvider({ children }: CompanyProviderProps) {
  const [companies, setCompanies] = useState<Company[]>([])
  const [loadingCompanies, setLoadingCompanies] = useState(false)

  async function loadCompanies() {
    setLoadingCompanies(true)
    const response = await fetch(`${baseUrl}/companies`)
    const data = (await response.json()) as Company[]
    setLoadingCompanies(false)

    setCompanies(data)
  }

  async function editCompany(company: Company) {
    const response = await fetch(`${baseUrl}/companies/${company.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(company),
    })
    await response.json()
  }

  async function deleteCompany(companyId: number) {
    const response = await fetch(`${baseUrl}/companies/${companyId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    await response.json()
  }

  function getCompanyNameById(id: number) {
    const index = companies.findIndex((company) => company.id === id)
    if (index < 0) return ''
    return companies[index].name
  }

  useEffect(() => {
    loadCompanies()
  }, [])

  return (
    <CompanyContext.Provider
      value={{
        companies,
        getCompanyNameById,
        editCompany,
        deleteCompany,
        loadingCompanies,
      }}
    >
      {children}
    </CompanyContext.Provider>
  )
}
