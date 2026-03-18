import React from "react";

/**
 * Composant Modal - Fenêtre modale Bootstrap
 * Props :
 *  - show {boolean} : affiche ou masque la modale
 *  - onClose {function} : callback pour fermer la modale
 *  - githubUser {object} : données du profil GitHub
 */
export default function Modal({ show, onClose, githubUser }) {
  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ zIndex: 1040 }}
      ></div>

      {/* Fenêtre modale */}
      <div
        className="modal fade show modal-github"
        style={{ display: "block", zIndex: 1050 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalGithubTitle"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title" id="modalGithubTitle">
                Mon profil GitHub
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Fermer"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {githubUser ? (
                <div className="row align-items-center">
                  {/* Avatar */}
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <img
                      src={githubUser.avatar_url}
                      alt={`Avatar de ${githubUser.login}`}
                      className="rounded-circle"
                    />
                  </div>
                  {/* Informations */}
                  <div className="col-md-8">
                    <ul className="github-info ps-0">
                      <li>
                        <i className="bi bi-person me-2"></i>
                        <a
                          href={githubUser.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {githubUser.name || githubUser.login}
                        </a>
                      </li>
                      <li>
                        <i className="bi bi-geo-alt me-2"></i>
                        {githubUser.location || "Non renseigné"}
                      </li>
                      <li>
                        <i className="bi bi-card-text me-2"></i>
                        {githubUser.bio || "Aucune biographie"}
                      </li>
                      <li>
                        <i className="bi bi-collection me-2"></i>
                        Repositories : {githubUser.public_repos}
                      </li>
                      <li>
                        <i className="bi bi-people me-2"></i>
                        Followers : {githubUser.followers}
                      </li>
                      <li>
                        <i className="bi bi-person-plus me-2"></i>
                        Following : {githubUser.following}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
