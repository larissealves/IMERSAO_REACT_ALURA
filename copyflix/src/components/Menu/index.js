import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'

import ButtonLink from '../ButtonLink/buttonLink'; 

function MenuCopyFlix() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className = "Logo" src = {Logo} alt= "CopyFlix" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
               Novo Link
            </ButtonLink>

        </nav>
    );
}

export default MenuCopyFlix;