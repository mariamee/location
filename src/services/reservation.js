import { toast } from 'react-toastify'

import { HEADERS } from 'utils/constants'
import http from './http'

export const getDetailReservation = async id => {
  try {
    const { data } = await http.get(`/reservation/${id}`, HEADERS)
    return data
  } catch (error) {
    toast.error('Error fetching reservation')
    return null
  }
}
export const getMyReservations = async () => {
  try {
    const { data } = await http.get('/reservation', HEADERS)
    return data?.reservations
  } catch (error) {
    toast.error('Error fetching my reservations')
    return null
  }
}
