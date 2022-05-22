import React from 'react'

import useAuth from 'hooks/useAuth'

import NormalNavbar from './NormalNavbar'
import PartnerNavbar from './PartenerNavbar'

const Navbar = () => {
  const { isPartner } = useAuth()

  return isPartner ? <PartnerNavbar /> : <NormalNavbar />
}

export default Navbar
