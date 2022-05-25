import { toast } from 'react-toastify'

import { HEADERS } from 'utils/constants'
import http from './http'

export const getAllFavoris = async () => {
  try {
    const { data } = await http.get('/favoris', HEADERS)
    return data?.favoris
  } catch (error) {
    toast.error('Error fetching favoris')
    return null
  }
}
