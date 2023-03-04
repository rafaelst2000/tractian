import { createContext, ReactNode, useEffect, useState } from "react";
import { Unit } from "../@types";


interface UnitContextType {
  units: Unit[]
}

interface UnitProviderProps {
  children: ReactNode
}

export const UnitContext = createContext<UnitContextType>({} as UnitContextType)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function UnitContextProvider({ children }: UnitProviderProps) {
  const [units, setUnits] = useState<Unit[]>([])

  async function loadUnits() {
    const response = await fetch(`${baseUrl}/units`)
    const data = await response.json() as Unit[]

    setUnits(data)
  }

  useEffect(() => {
    loadUnits()
  }, [])

  return (
    <UnitContext.Provider value={{ units }}>
      {children}
    </UnitContext.Provider>
  )
}