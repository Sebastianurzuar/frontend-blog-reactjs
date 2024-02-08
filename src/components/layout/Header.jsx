import React from 'react'
import LogoImagenYoga from '../../../public/images/Logo-ImagenYoga.png'
import logoyogaramdas from '../../../public/images/logoyogaramdas.png'

export const Header = () => {
    return (
        <header className="header">

            <div id="logoyoga" >
                <img className="logoimagenyoga" src={LogoImagenYoga} alt="Logo-chacras" />
            </div>

            <div id="logoyoga" className="logoyogaramdas">
                <img src={logoyogaramdas} alt="letras-Centro-de-yoga-ramdas" />
            </div>

        </header>
    )
}
