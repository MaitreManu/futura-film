import React from "react";
import '../styles/components/footer.scss';
import '../styles/settings.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo2">
          <img src="./images/logo2.png" alt="Logo2" />
        </div>

        <div className="menus">
          <ul className="menu1">
            <li><a href="/">Accueil</a></li>
            <li><a href="Categories">Catégories</a></li>
            <li><a href="About">À propos</a></li>
            <li><a href="Search">Recherche</a></li>
          </ul>

          <ul className="menu2">
            <li><a href='/'>Newsletter</a></li>
            <li><a href="/">Conditions d'utilisation</a></li>
            <li><a href="/">Politique de confidentialité</a></li>
            <li><a href="/">Préférence des cookies</a></li>

          </ul>

          <ul className="menu3">
            <li><a>Suivez-nous</a></li>
            <li className="socialmedia">
              <a href="/"><img src="../images/facebook.png" alt="facebook" /></a>
              <a href="/"><img src="../images/instagram.png" alt="instagram" /></a>
              <a href="/"><img src="../images/youtube.png" alt="youtube" /></a>
              <a href="/"><img src="../images/twitter.png" alt="twitter" /></a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          © Tous droits réservés Futura Film 2023
        </div>

      </div>

    </div>
  );
}

export default Footer;

