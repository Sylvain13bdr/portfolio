import React from "react";
import { Link } from "react-router-dom";

/**
 * Composant Footer - Pied de page identique sur toutes les pages
 * - Col 1 : Coordonnées + icônes réseaux sociaux (GitHub, Twitter, LinkedIn)
 * - Col 2 : Liens vers les pages
 * - Col 3 : Liens vers les dernières réalisations (→ page Portfolio)
 */
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">

          {/* Colonne 1 : Coordonnées + réseaux sociaux */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            {/* Icônes réseaux sociaux - s'éclaircissent au survol via CSS */}
            <div className="social-icons mt-2">
              <a
                href="https://github.com/github-johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub de John Doe"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Twitter de John Doe"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn de John Doe"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens vers les pages */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Liens utiles</h5>
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Me contacter</Link>
            <Link to="/mentions-legales">Mentions légales</Link>
          </div>

          {/* Colonne 3 : Dernières réalisations (→ Portfolio tant que pages individuelles indisponibles) */}
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <Link to="/portfolio">Fresh Food</Link>
            <Link to="/portfolio">Restaurant Akira</Link>
            <Link to="/portfolio">Espace bien-être</Link>
            <Link to="/portfolio">SEO</Link>
            <Link to="/portfolio">Création d'une API</Link>
            <Link to="/portfolio">Maquette d'un site</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
