import React, { useState, useEffect } from "react";
import Modal from "../components/ui/Modal";

/**
 * Page d'accueil
 * - Hero avec image de fond, h1/h2 centrés, bouton "En savoir plus"
 * - Modale GitHub : données récupérées une seule fois via useEffect
 * - Section À propos + Mes compétences (progress bars Bootstrap)
 */
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [githubUser, setGithubUser] = useState(null);

  // Récupération du profil GitHub une seule fois au chargement de la page
  useEffect(() => {
    fetch("https://api.github.com/users/Sylvain13bdr")
      .then((res) => res.json())
      .then((data) => setGithubUser(data))
      .catch((err) => console.error("Erreur API GitHub :", err));
  }, []);

  const skills = [
    { name: "HTML5", level: 90, color: "danger" },
    { name: "CSS3", level: 80, color: "info" },
    { name: "JAVASCRIPT", level: 70, color: "warning" },
    { name: "PHP", level: 60, color: "success" },
    { name: "REACT", level: 50, color: "primary" },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
        aria-label="Section hero"
      >
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button
            className="btn btn-danger mt-3"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* ===== SECTION À PROPOS + COMPÉTENCES ===== */}
      <section className="container my-5">
        <div className="row g-4 p-4 border rounded shadow-sm">

          {/* À propos */}
          <div className="col-md-6">
            <h2 className="border-bottom border-primary pb-2">A propos</h2>
            <img
              src="/img/john-doe-about.jpg"
              alt="Photo de John Doe"
              className="img-fluid mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex delectus
              reiciendis impedit aut iure enim placeat? Natus, neque at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex delectus
              reiciendis impedit aut iure enim placeat? Natus, neque at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex delectus
              reiciendis impedit aut iure enim placeat? Natus, neque at?
            </p>
          </div>

          {/* Mes compétences */}
          <div className="col-md-6">
            <h2 className="border-bottom border-primary pb-2">Mes compétences</h2>
            <div className="mt-3">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-3">
                  <p className="skill-label mb-1">
                    {skill.name} {skill.level}%
                  </p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "12px" }}
                  >
                    <div
                      className={`progress-bar bg-${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== MODALE GITHUB ===== */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        githubUser={githubUser}
      />
    </>
  );
}
