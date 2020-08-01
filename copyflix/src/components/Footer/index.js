import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className = "Logo" src = {Logo} alt= "CopyFlix" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> <br/>
      </p>
      <a href="https://github.com/larissealves/"target="_blank"> GitHub </a>
    </FooterBase>
  );
}

export default Footer;
