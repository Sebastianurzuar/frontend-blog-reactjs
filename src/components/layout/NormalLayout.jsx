import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import { Pnav } from './private/Pnav'
import { Nav } from './public/Nav'

export const NormalLayout = () => {

  const { auth } = useAuth()
  return (
    <>
      {/* LAYOUT */}
      {auth._id ? <Pnav /> : <Nav />}
      <section id="content" className="content">
        <Outlet />
      </section>



    </>
  )
}