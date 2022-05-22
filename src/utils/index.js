export const getImage = path => {
  return 'http://localhost:8000/' + path?.replace('public', 'storage')
}
