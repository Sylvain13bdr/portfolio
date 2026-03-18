import React from "react";

/**
 * Page Services
 * - Bannière en haut
 * - Titre de section avec séparateur bleu
 * - 3 cartes Bootstrap : UX Design, Développement web, Référencement
 * - Hover : fond #efefef + ombre (via classe CSS card-hover)
 */
const services = [
  {
    id: 1,
    icon: "bi-pencil",
    title: "UX Design",
    description:
      "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
  },
  {
    id: 2,
    icon: "bi-code-slash",
    title: "Développement web",
    description:
      "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
  },
  {
    id: 3,
    icon: "bi-search",
    title: "Référencement",
    description:
      "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
  },
];

export default function Services() {
  return (
    <>
      {/* Bannière */}
      <img
        src="/img/banner.jpg"
        alt="Services - bannière"
        className="page-banner"
      />

      {/* Contenu */}
      <div className="container my-5">
        {/* Titre de section */}
        <div className="section-title">
          <h1>Mon offre de services</h1>
          <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
          <hr className="section-divider" />
        </div>

        {/* Cards */}
        <div className="row g-4 mt-2">
          {services.map((service) => (
            <div key={service.id} className="col-md-4">
              <div className="card h-100 text-center card-hover p-3">
                <div className="card-body">
                  <i className={`bi ${service.icon} text-primary fs-2 mb-3`}></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
