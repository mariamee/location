import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

const useNeedToBePartner = () => {
  const { isPartner } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isPartner) navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useNeedToBePartner
