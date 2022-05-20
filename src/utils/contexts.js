import { createContext } from 'react'

const localData = localStorage.getItem('data')
const user = localData && JSON.parse(localData)
console.log('user', user)

export const UserContext = createContext({
  user,
  setUser: () => null,
})
