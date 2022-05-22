import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

const useNeedToBeClient = () => {
  const { isClient } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isClient) navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useNeedToBeClient
