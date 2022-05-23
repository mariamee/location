import { createContext } from 'react'

const localData = localStorage.getItem('data')
const user = localData && JSON.parse(localData)

export const UserContext = createContext({
  user,
  setUser: () => null,
})
export const AnnoncesContext = createContext({
  annonces: [],
  setAnnonces: () => null,
})
export const MyAnnoncesContext = createContext({
  myAnnonces: [],
  setMyAnnonces: () => null,
})
