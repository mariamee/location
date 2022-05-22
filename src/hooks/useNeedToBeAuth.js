import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

const useNeedToBeAuth = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useNeedToBeAuth
