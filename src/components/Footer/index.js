import React from 'react';
import { FooterBase } from './styles';
import LogoCINFO from "../../assets/img/logocinfo.png";
function Footer() {
  return (
    <FooterBase>
      <a href="https://linktr.ee/cinfoifal">
        <img src={LogoCINFO} alt="Logo CINFO" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
