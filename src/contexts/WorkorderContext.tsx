import { createContext, ReactNode, useEffect, useState } from "react";
import { Workorder } from "../@types";


interface WorkorderContextType {
  workorders: Workorder[]
}

interface WorkorderProviderProps {
  children: ReactNode
}

export const WorkorderContext = createContext<WorkorderContextType>({} as WorkorderContextType)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function WorkorderContextProvider({ children }: WorkorderProviderProps) {
  const [workorders, setWorkorders] = useState<Workorder[]>([])

  async function loadWorkorders() {
    const response = await fetch(`${baseUrl}/workorders`)
    const data = await response.json() as Workorder[]

    setWorkorders(data)
  }
  
  useEffect(() => {
    loadWorkorders()
  }, [])

  return (
    <WorkorderContext.Provider value={{ workorders }}>
      {children}
    </WorkorderContext.Provider>
  )
}