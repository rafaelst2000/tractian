import { createContext, ReactNode, useEffect, useState } from "react";
import { Workorder } from "../@types";


interface WorkorderContextType {
  workorders: Workorder[]
  loadingWorkorders: boolean
}

interface WorkorderProviderProps {
  children: ReactNode
}

export const WorkorderContext = createContext<WorkorderContextType>({} as WorkorderContextType)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function WorkorderContextProvider({ children }: WorkorderProviderProps) {
  const [workorders, setWorkorders] = useState<Workorder[]>([])
  const [loadingWorkorders, setLoadingWorkorders] = useState(false)

  async function loadWorkorders() {   
    setLoadingWorkorders(true)
    const response = await fetch(`${baseUrl}/workorders`)
    const data = await response.json() as Workorder[]
    setLoadingWorkorders(false)

    setWorkorders(data)
  }
  
  useEffect(() => {
    loadWorkorders()
  }, [])

  return (
    <WorkorderContext.Provider value={{ workorders, loadingWorkorders }}>
      {children}
    </WorkorderContext.Provider>
  )
}