import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../@types";


interface UserContextType {
  users: User[]
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function UserContextProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  async function loadUsers() {
    const response = await fetch(`${baseUrl}/units`)
    const data = await response.json() as User[]

    setUsers(data)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  )
}