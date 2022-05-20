import { useContext, useEffect } from 'react'
import { UserContext } from 'utils/contexts'

const useAuth = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      const localData = localStorage.getItem('data')
      const user = localData && JSON.parse(localData)
      setUser(user)
    }
  }, [])

  return { user, setUser }
}

export default useAuth
