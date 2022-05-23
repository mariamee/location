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

export const getFilteredAnnonces = async filter => {
  try {
    const { data } = await http.post('/annonces/filter', filter, HEADERS)
    return data?.annonces
  } catch (error) {
    toast.error('Error filtering annonces')
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
    toast.success('annonce ajoutée avec succès')
    return data
  } catch (error) {
    toast.error('Error posting annonce')
    return null
  }
}

export const editAnnonce = async (annonce, id) => {
  try {
    const { data } = await http.put(`/annonce/update/${id}`, annonce, HEADERS)
    toast.success('annonce modifiée avec succès')
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
    toast.success('Annonce archivée avec succès')
    return data
  } catch (error) {
    toast.error(`Error ${isArchive ? 'arhiving' : 'unarchiving'} annonce`)
    return null
  }
}

export const deleteAnnonce = async id => {
  try {
    const { data } = await http.delete(`/annonce/delete/${id}`, HEADERS)
    toast.success('Annonce supprimée avec succès')
    return data
  } catch (error) {
    toast.error(`Error deleting annonce with id ${id}`)
    return null
  }
}
export const addAvisAnnonce = async avis => {
  try {
    const { data } = await http.post('/avis/annonce/add', avis, HEADERS)
    toast.success('Avis sur cette Annonce ajoutée avec succès')
    return data
  } catch (error) {
    toast.error(`Error adding avis to annonce`)
    return null
  }
}

export const getAllAvisAnnonce = async id => {
  try {
    const { data } = await http.get(`/avis/annonce/${id}`, HEADERS)
    return data?.avis
  } catch (error) {
    toast.error(`Error getting avis for this annonce`)
    return null
  }
}
