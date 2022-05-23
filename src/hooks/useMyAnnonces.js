import { useContext } from 'react'
import { MyAnnoncesContext } from 'utils/contexts'

const useMyAnnonces = () => {
  const { myAnnonces, setMyAnnonces } = useContext(MyAnnoncesContext)

  return { myAnnonces, setMyAnnonces }
}

export default useMyAnnonces
