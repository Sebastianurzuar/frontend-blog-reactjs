import React from 'react'
import { Nav } from '../public/Nav'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'


export const PublicLayout = () => {

  const { auth } = useAuth()
  return (
    <>
      {/* LAYOUT */}
      <Nav />
      <section id="content" className="content">
        {!auth._id ?
          <Outlet />
          :
          <Navigate to='/account' />
        }
      </section>



    </>
  )
}
