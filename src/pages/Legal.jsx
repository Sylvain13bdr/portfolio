import React, { useEffect } from "react";

/**
 * Page Mentions Légales
 * - Meta noindex ajoutée dynamiquement (page non indexée par les moteurs)
 * - Titre + séparateur bleu
 * - Accordéon Bootstrap : Éditeur du site / Hébergeur / Crédits
 */
export default function Legal() {
  // Ajout dynamique de la balise meta robots noindex pour cette page
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // Nettoyage : on retire le meta quand on quitte la page
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="container my-5">
      {/* Titre de section */}
      <div className="section-title">
        <h1>Mentions légales</h1>
        <hr className="section-divider" />
      </div>

      {/* Accordéon Bootstrap */}
      <div className="accordion mt-4" id="accordionLegal">

        {/* Section 1 : Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEditor">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEditor"
              aria-expanded="true"
              aria-controls="collapseEditor"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="collapseEditor"
            className="accordion-collapse collapse show"
            aria-labelledby="headingEditor"
            data-bs-parent="#accordionLegal"
          >
            <div className="accordion-body">
              <address>
                <p className="fw-semibold fs-5">John Doe</p>
                <p>
                  <i className="bi bi-building me-2"></i>
                  <a href="https://maps.google.com/?q=40+rue+Laure+Diebold+Lyon" target="_blank" rel="noopener noreferrer">
                    40 rue Laure Diebold
                  </a>
                </p>
                <p>
                  <i className="bi bi-geo-alt me-2"></i>
                  69009 Lyon, France
                </p>
                <p>
                  <i className="bi bi-telephone me-2"></i>
                  10 20 30 40 50
                </p>
                <p>
                  <i className="bi bi-envelope me-2"></i>
                  john.doe@gmail.com
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Section 2 : Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHost">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHost"
              aria-expanded="false"
              aria-controls="collapseHost"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseHost"
            className="accordion-collapse collapse"
            aria-labelledby="headingHost"
            data-bs-parent="#accordionLegal"
          >
            <div className="accordion-body">
              <p className="fw-semibold fs-5">alwaysdata</p>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>
                <i className="bi bi-globe me-2"></i>
                <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 : Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCredits">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCredits"
              aria-expanded="false"
              aria-controls="collapseCredits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseCredits"
            className="accordion-collapse collapse"
            aria-labelledby="headingCredits"
            data-bs-parent="#accordionLegal"
          >
            <div className="accordion-body">
              <h5>Crédits</h5>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a href="https://www.cef.fr" target="_blank" rel="noopener noreferrer">
                  Centre Européen de formation
                </a>
                .
              </p>
              <p>
                <em>
                  Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{" "}
                  <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer nofollow">
                    Pixabay
                  </a>
                </em>
              </p>
              <p>
                <em>
                  La favicon de ce site a été fournie par{" "}
                  <a
                    href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                </em>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
