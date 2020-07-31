import React from 'react';
import { FooterBase } from './styles';
import MyGitOctocat from '../../assets/img/MyGitOctocat.png'
import './Footer.css'

function Footer() {
  return (
    <FooterBase>
      <div>
        <a href="https://github.com/MatteusSouza">Github</a>
        {' / '}
        <a href="https://www.linkedin.com/in/matteus-souza/">Linkedin</a>
        <p>
        Projeto feito em React durante o bootcamp da Alura.
          <span role="img" aria-label="sheep">💙💙</span>
        </p>
      </div>
      <a href="https://github.com/MatteusSouza">
        <img className="MyGitOctocat" src={MyGitOctocat} alt="MyGitOctocat" />
      </a>
    </FooterBase>
  );
}

export default Footer;