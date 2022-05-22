import { toast } from 'react-toastify'

import { HEADERS } from 'utils/constants'
import http from './http'

export const getDetailReservation = async id => {
  try {
    const { data } = await http.get(`/reservationByAnnonceId/${id}`, HEADERS)
    return data?.reservation
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

export const getPartnerReservations = async () => {
  try {
    const { data } = await http.get('/reservation/partenaire', HEADERS)
    return data?.reservations
  } catch (error) {
    toast.error('Error fetching partner reservations')
    return null
  }
}
export const acceptReservation = async id => {
  try {
    const { data } = await http.get(`/reservation/accepter/${id}`, HEADERS)
    toast.success('Reservation acceptée avec succès')
    return data
  } catch (error) {
    toast.error('Error accepting reservatoin')
    return null
  }
}
export const refuseReservation = async id => {
  try {
    const { data } = await http.get(`/reservation/refuser/${id}`, HEADERS)
    toast.success('Reservation refusée avec succès')
    return data
  } catch (error) {
    toast.error('Error refusing reservatoin')
    return null
  }
}
