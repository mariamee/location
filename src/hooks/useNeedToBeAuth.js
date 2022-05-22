import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

const useNeedToBeAuth = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  //   const localData = localStorage.getItem('data')
  //   const lsUser = localData && JSON.parse(localData)

  useEffect(() => {
    if (!user) navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useNeedToBeAuth
