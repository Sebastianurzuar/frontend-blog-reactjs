import React, { useEffect, useState } from 'react'
import avatar from '../../../public/images/img/user.png'
import { useParams } from 'react-router-dom'
import { Global } from '../../helpers/Global'

export const Profile = () => {

  const params = useParams()
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    GetProfile()
    console.log(userProfile)
  }, [])

  const GetProfile = async () => {
    const request = await fetch(Global.url + 'user/profile/' + params.userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    const data = await request.json()
    if (data.status == "success") {
      setUserProfile(data.user)
    }
  }

  return (

    <div className="profile-container">

      {userProfile.image != "default.png" && <img className="profile-image" src={Global.url + 'user/avatar/' + userProfile.image} alt="Imagen de perfil" />}
      {userProfile.image == "default.png" && <img className="profile-image" src={avatar} className="list-end__img" alt="Imagen de perfil" />}

      <div className="profile-data">
        <span><strong>Nombre:</strong> {userProfile.name}</span>
        <span><strong>Nick:</strong> {userProfile.nick}</span>
        <span><strong>Email:</strong> {userProfile.email}</span>
        <span><strong>ID:</strong> {userProfile._id}</span>
        <span><strong>Fecha de Creación:</strong> {userProfile.created_at}</span>
        {userProfile.rol == 'role_admin' &&
          <span><strong>Rol:</strong> {userProfile.rol}</span>
        }
      </div>
    </div>


  )
}
