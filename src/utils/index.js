export const getImage = path => {
  if (!path) return null
  return 'http://localhost:8000/' + path?.replace('public','storage')
}
