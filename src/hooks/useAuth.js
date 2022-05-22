import { useContext, useEffect } from 'react'
import { ROLE_IDS } from 'utils/constants'
import { UserContext } from 'utils/contexts'

const useAuth = () => {
  const { user, setUser } = useContext(UserContext)
  const role_id = user?.role?.role_id
  const user_id = user?.user?.id
  const isPartner = role_id == ROLE_IDS.PARTENER
  const isAdmin = role_id == ROLE_IDS.ADMIN
  const isClient = role_id == ROLE_IDS.CLIENT

  useEffect(() => {
    if (!user) {
      const localData = localStorage.getItem('data')
      const user = localData && JSON.parse(localData)
      setUser(user)
    }
  }, [])

  return { user, setUser, isPartner, isAdmin, isClient, user_id }
}

export default useAuth
