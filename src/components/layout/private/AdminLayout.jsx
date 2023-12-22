import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Pnav } from './Pnav'
import useAuth from '../../../hooks/useAuth'


export const AdminLayout = () => {

  const { auth, loading } = useAuth()
  if (loading) {
    return <h1>Cargando..</h1>
  } else {
    return (
      <>
        {/* LAYOUT */}
        <Pnav />
        <section id="content" className="content">
          {auth.rol == "role_admin" ?
            <Outlet />
            :
            <Navigate to='/inicio' />
          }
        </section>



      </>
    )
  }
}