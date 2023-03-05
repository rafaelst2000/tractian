import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../@types";


interface UserContextType {
  users: User[]
  loadingUsers: boolean
  editUser: (user: User) => void
  deleteUser: (userId: number) => void
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function UserContextProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [loadingUsers, setLoadingUsers] = useState(false)

  async function loadUsers() {
    setLoadingUsers(true)
    const response = await fetch(`${baseUrl}/users`)
    const data = await response.json() as User[]
    setLoadingUsers(false)

    setUsers(data)
  }

  async function editUser(user: User) {
    const response = await fetch(`${baseUrl}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
    })
    await response.json()
  }

  async function deleteUser(userId: number) {
    const response = await fetch(`${baseUrl}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
    })
    await response.json()
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <UserContext.Provider value={{ users, deleteUser, editUser, loadingUsers }}>
      {children}
    </UserContext.Provider>
  )
}