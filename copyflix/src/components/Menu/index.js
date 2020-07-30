import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Menu.css';

import ButtonLink from '../ButtonLink/buttonLink'; 

function MenuCopyFlix() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className = "Logo" src = {Logo} alt= "CopyFlix" />
            </Link>
            <ButtonLink className="ButtonLink" to="/cadastro/video">
               Novo Vídeo
            </ButtonLink>

        </nav>
    );
}

export default MenuCopyFlix;