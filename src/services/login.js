import { toast } from 'react-toastify'

import { HEADERS } from 'utils/constants'
import http from './http'

export const onConnect = async (email, password) => {
  try {
    const { data } = await http.post('/login', { email, password }, HEADERS)
    if (data) localStorage.setItem('data', JSON.stringify(data))
    return data
  } catch (error) {
    toast.error('Email ou mot de passe incorrect')
    return null
  }
}

export const onRegister = async user => {
  try {
    const { data } = await http.post('/register', user, HEADERS)
    console.log('onRegister response', data)
    return data
  } catch (error) {
    toast.error('error register')
    return null
  }
}
