import React from "react";

/**
 * Page Portfolio
 * - Bannière en haut
 * - Titre de section avec séparateur
 * - 6 projets en cards Bootstrap (3 par ligne desktop, 2 tablette, 1 mobile)
 * - Hover : fond #efefef + ombre + bouton s'éclaircit
 */
const projects = [
  {
    id: 1,
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL",
    img: "/img/portfolio/fresh-food.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress",
    img: "/img/portfolio/restaurant-japonais.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL",
    img: "/img/portfolio/espace-bien-etre.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "SEO",
    description: "Amélioration du référencement d'un site e-commerce",
    tech: "Utilisation des outils SEO",
    img: "/img/portfolio/seo.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    tech: "PHP - SYMFONY",
    img: "/img/portfolio/coder.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    tech: "Réalisé avec FIGMA",
    img: "/img/portfolio/screens.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Bannière */}
      <img
        src="/img/banner.jpg"
        alt="Portfolio - bannière"
        className="page-banner"
      />

      {/* Contenu */}
      <div className="container my-5">
        {/* Titre de section */}
        <div className="section-title">
          <h1>Portfolio</h1>
          <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
          <hr className="section-divider" />
        </div>

        {/* Cards projets */}
        <div className="row g-4 mt-2">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 card-hover">
                <img
                  src={project.img}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary btn-sm"
                    rel="noopener noreferrer"
                  >
                    Voir le site
                  </a>
                </div>
                <div className="card-footer text-center text-muted small">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
