import { ReactNode } from 'react'
import { AssetContextProvider } from './AssetContext'
import { CompanyContextProvider } from './CompanyContext'
import { UnitContextProvider } from './UnitContext'
import { UserContextProvider } from './UserContext'
import { WorkorderContextProvider } from './WorkorderContext'
interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AssetContextProvider>
      <CompanyContextProvider>
        <UnitContextProvider>
          <UserContextProvider>
            <WorkorderContextProvider>
              {children}
            </WorkorderContextProvider>
          </UserContextProvider>
        </UnitContextProvider>
      </CompanyContextProvider>
    </AssetContextProvider>
  )
}