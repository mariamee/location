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
export const getAnnonceDetail = async id => {
  try {
    const { data } = await http.get(`/annonce/${id}`, HEADERS)
    return data?.annonce
  } catch (error) {
    toast.error('Error fetching annonces')
    return null
  }
}

export const getUserAnnonceOwner = async id => {
  try {
    const { data } = await http.get(`/user/${id}`, HEADERS)
    return data
  } catch (error) {
    toast.error('Error fetching user informations')
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

export const editAnnonce = async (annonce, id) => {
  try {
    const { data } = await http.put(`/annonce/update/${id}`, annonce, HEADERS)
    return data
  } catch (error) {
    toast.error('Error editing annonce')
    return null
  }
}

export const reserveAnnonce = async reservation => {
  try {
    const { data } = await http.post('reservation/add', reservation, HEADERS)
    toast.success('Invitation de reservation envoyée avec succès')
    return data
  } catch (error) {
    toast.error('Error reserving annonce')
    return null
  }
}
export const archiveAnnonce = async (id, annonce) => {
  const isArchive = annonce.status == 1 ? true : false
  try {
    const { data } = await http.put(`/annonce/update/${id}`, annonce, HEADERS)
    return data
  } catch (error) {
    toast.error(`Error ${isArchive ? 'arhiving' : 'unarchiving'} annonce`)
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
