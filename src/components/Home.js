import React, { useEffect, useState } from 'react'
import Adverts from './Adverts'
import Filter from './Filter'
import Previews from './Previews'
import { getAllAnnonces } from 'services/annonce'
// import { Carousel } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
  const [previews, setPreviews] = useState([])
  useEffect(() => {
    getAllAnnonces().then(_previews => setPreviews(_previews))
  }, [])

  if (!previews?.length) return null

  return (
    <div>
      <Filter />
      <Adverts />
      <Previews previews={previews} />
    </div>
  )
}

export default Home
