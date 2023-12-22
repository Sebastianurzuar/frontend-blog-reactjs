import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Footer = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        // Cambiar a la ruta '/otra-ruta'
        setTimeout(() => {
            navigate('/inicio')
            window.location.reload()
        }, 1000)
    };
    return (
        <footer className="footer">
            &copy; Centro de Yoga Ram Das - <Link onClick={handleButtonClick} >www.ramdas.com</Link>
        </footer>
    )
}
