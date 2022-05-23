import React from 'react'

import Adverts from './Adverts'
import Filter from './Filter'
import Previews from './Previews'
// import { Carousel } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
  return (
    <div>
      <Filter />
      <Adverts />
      <Previews />
    </div>
  )
}

export default Home
