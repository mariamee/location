import { toast } from 'react-toastify'

import { HEADERS } from 'utils/constants'
import http from './http'

export const getAllFavoris = async () => {
  try {
    const { data } = await http.get('/favoris', HEADERS)
    return data?.favoris
  } catch (error) {
    return null
  }
}
export const addNewFavoris = async annonce_id => {
  try {
    const { data } = await http.post('/favoris/add', { annonce_id }, HEADERS)
    toast.success('Ajoutée au favoris avec succès')
    return data?.favoris
  } catch (error) {
    return null
  }
}
