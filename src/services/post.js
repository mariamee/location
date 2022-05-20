import { FAVORITS, POSTS, HEADERS } from 'utils/constants'
import http from './http'

export const getPosts = async () => {
  // const { data } = await http.get("/posts", HEADERS);
  // TODO , MOCK data, use real data instead
  return POSTS

  // console.log("data", data);
  // return data;
}

export const getPost = async id => {
  const { data } = await http.get(`/posts/${id}`, HEADERS)
  return data
}

export const getFavorits = async () => {
  return FAVORITS
}

export const onPostAdvert = async advert => {
  try {
    const { data } = await http.post('/annonce/add', advert, HEADERS)
    console.log('onPostAdvert response', data)
    return data
  } catch (error) {
    console.log('error', error)
    return null
  }
}
