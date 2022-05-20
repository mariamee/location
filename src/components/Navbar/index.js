import React from 'react'

import useAuth from 'hooks/useAuth'
import { ROLE_IDS } from 'utils/constants'

import NormalNavbar from './NormalNavbar'
import PartnerNavbar from './PartenerNavbar'

const Navbar = () => {
  const { user } = useAuth()
  const role_id = user?.role?.role_id
  const isPartner = role_id == ROLE_IDS.PARTENER
  console.log('user Navbar', user)
  // const isAdmin = role_id == ROLE_IDS.ADMIN;
  // const isClient = role_id == ROLE_IDS.CLIENT;

  return isPartner ? <PartnerNavbar /> : <NormalNavbar />
}

export default Navbar
