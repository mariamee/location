import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

const useNeedToBeAdmin = () => {
  const { isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useNeedToBeAdmin
