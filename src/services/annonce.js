import { toast } from 'react-toastify'

import { HEADERS } from 'utils/constants'
import http from './http'

export const getAllAnnonces = async () => {
  try {
    const { data } = await http.get('/annonces/', HEADERS)
    return data?.annonces
  } catch (error) {
    toast.error('Error fetching annonces')
    return null
  }
}

export const getMyAnnonces = async () => {
  try {
    const { data } = await http.get('/myannonces/', HEADERS)
    return data?.annonces
  } catch (error) {
    toast.error('Error fetching my annonces')
    return null
  }
}

export const addNewAnnonce = async annonce => {
  try {
    const { data } = await http.post('/annonce/add', annonce, HEADERS)
    return data
  } catch (error) {
    toast.error('Error posting annonce')
    return null
  }
}
export const deleteAnnonce = async id => {
  try {
    const { data } = await http.delete(`/annonce/delete/${id}`, HEADERS)
    return data
  } catch (error) {
    toast.error(`Error deleting annonce with id ${id}`)
    return null
  }
}
