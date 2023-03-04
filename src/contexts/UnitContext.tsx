import { createContext, ReactNode, useEffect, useState } from "react";
import { Unit } from "../@types";


interface UnitContextType {
  units: Unit[]
  editUnit: (unit: Unit) => void
  deleteUnit: (unitId: number) => void
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

  async function editUnit(unit: Unit) {
    const response = await fetch(`${baseUrl}/units/${unit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(unit)
    })
    await response.json()
  }

  async function deleteUnit(unitId: number) {
    const response = await fetch(`${baseUrl}/units/${unitId}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
    })
    await response.json()
  }


  useEffect(() => {
    loadUnits()
  }, [])

  return (
    <UnitContext.Provider value={{ units, editUnit, deleteUnit }}>
      {children}
    </UnitContext.Provider>
  )
}