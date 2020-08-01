import React from 'react';
import Logo from '../../assets/img/cinfoflix.png';
//import ButtonLink from '../ButtonLink';
import './Menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
        <a href="/">
            <img class="Logo" src={Logo} alt="CINFOFLIX Logo"/>
        </a>
        <Button as="a" href="/" className="ButtonLink">Novo Vídeo</Button>
        </nav>
    );
}
export default Menu;