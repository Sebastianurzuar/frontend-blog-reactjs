import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// Pages
import { Inicios } from '../components/pages/Inicios';
import { Articulos } from '../components/pages/Articulos';
import { Crear } from '../components/pages/Crear';
// Layouts
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { Busqueda } from '../components/pages/Busqueda';
import { Articulo } from '../components/pages/Articulo';
import { Editar } from '../components/pages/Editar';
import { Login } from '../components/user/Login';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { AuthProvider } from '../components/context/AuthProvider';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Register } from '../components/user/Register';
import { NormalLayout } from '../components/layout/NormalLayout';
import { Logout } from '../components/user/Logout';
import { Ajustes } from '../components/user/Ajustes';
import { Profile } from '../components/user/Profile';
import { AdminLayout } from '../components/layout/private/AdminLayout';


export const Rutas = () => {
    return (
        <BrowserRouter>

            {/* Layout */}
            <Header />

            {/* Contenido central y rutas */}
            <AuthProvider>
                <Routes>
                    <Route path='/users' element={<PublicLayout />}>
                        <Route index element={<Login />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>

                    <Route path='/account' element={<PrivateLayout />}>
                        <Route index element={<Inicios />} />
                        <Route path='editar/:id' element={<Editar />} />
                        <Route path='logout' element={<Logout />} />
                        <Route path='ajustes' element={< Ajustes />} />
                        <Route path='profile/:userId' element={< Profile />} />
                    </Route>

                    <Route path='/crear' element={<AdminLayout />}>
                        <Route index element={<Crear />} />
                        <Route path='articulo' element={<Crear />} />
                    </Route>

                    <Route path='/' element={<NormalLayout />}>
                        <Route index element={<Inicios />} />
                        <Route path='inicio' element={<Inicios />} />
                        <Route path='articulos' element={<Articulos />} />
                        <Route path='buscar/:busqueda' element={<Busqueda />} />
                        <Route path='articulo/:id' element={<Articulo />} />
                        <Route path='profile/:userId' element={< Profile />} />
                    </Route>



                    <Route path='*' element={
                        <div className='jumbo'>
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
                <Sidebar />
            </AuthProvider>
            <Footer />
        </BrowserRouter>
    )
}
