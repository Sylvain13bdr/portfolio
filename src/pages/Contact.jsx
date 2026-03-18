import React, { useState } from "react";

/**
 * Page Contact
 * - Titre de section avec séparateur
 * - Formulaire de contact (nom, email, téléphone, sujet, message) - tous obligatoires
 * - Coordonnées de John Doe
 * - Google Map intégrée via iframe
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message envoyé ! (démonstration)");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <div className="container my-5">
      {/* Titre de section */}
      <div className="section-title">
        <h1>Contact</h1>
        <p className="text-muted">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <hr className="section-divider" />
      </div>

      {/* Carte principale */}
      <div className="row g-4 mt-2 border rounded shadow-sm p-4">

        {/* Formulaire */}
        <div className="col-md-6">
          <h2 className="border-bottom border-primary pb-2">Formulaire de contact</h2>
          <form onSubmit={handleSubmit} className="mt-3" noValidate>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Votre nom"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Votre adresse email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Votre adresse email"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Votre numéro de téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-label="Votre numéro de téléphone"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Sujet"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                placeholder="Votre message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Votre message"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">
                Envoyer
              </button>
            </div>
          </form>
        </div>

        {/* Coordonnées + Google Map */}
        <div className="col-md-6">
          <h2 className="border-bottom border-primary pb-2">Mes coordonnées</h2>
          <address className="mt-3 not-italic">
            <p className="fw-semibold fs-5">John Doe</p>
            <p>
              <i className="bi bi-building me-2"></i>
              40 rue Laure Diebold
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
          {/* Google Map - 40 rue Laure Diebold, Lyon */}
          <div className="mt-3">
            <iframe
              title="Localisation John Doe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8!2d4.8059!3d45.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb6b6ee8a9cd%3A0x1b7f7d5e2f7d1234!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
