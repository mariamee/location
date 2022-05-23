import { useContext } from 'react'
import { AnnoncesContext } from 'utils/contexts'

const useAnnonces = () => {
  const { annonces, setAnnonces } = useContext(AnnoncesContext)

  return { annonces, setAnnonces }
}

export default useAnnonces
