import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// Pages
import { Inicios } from '../components/pages/Inicios';
import { Articulos } from '../components/pages/Articulos';
import { Crear } from '../components/pages/Crear';
// Layouts
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { Busqueda } from '../components/pages/Busqueda';
import { Articulo } from '../components/pages/Articulo';
import { Editar } from '../components/pages/Editar';


export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* Layout */}
            <Header />
            <Nav />

            {/* Contenido central y rutas */}
            <section id="content" className="content">
                <Routes>
                    <Route path='/' element={<Inicios />} />
                    <Route path='/inicio' element={<Inicios />} />
                    <Route path='/articulos' element={<Articulos />} />
                    <Route path='/crear-articulo' element={<Crear />} />
                    <Route path='/buscar/:busqueda' element={<Busqueda />} />
                    <Route path='/articulo/:id' element={<Articulo />} />
                    <Route path='/editar/:id' element={<Editar />} />

                    <Route path='*' element={
                        <div className='jumbo'>
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Sidebar />
            <Footer />
        </BrowserRouter>
    )
}
