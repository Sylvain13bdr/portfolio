# Sylvain Labeye - Portfolio React.js

Portfolio professionnel d'un développeur web full stack, développé avec React.js et Bootstrap 5.

## Prérequis

- Node.js >= 16.x
- npm >= 8.x

## Installation

```bash
# Cloner le repository
git clone https://github.com/Sylvain13bdr/portfolio.git
cd portfolio

# Installer les dépendances
npm install
```

## Lancement en développement

```bash
npm start
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000)

## Build de production

```bash
npm run build
```

## Structure du projet

```
src/
├── App.js                    # Routes principales
├── index.js                  # Point d'entrée (BrowserRouter)
├── index.css                 # Styles globaux personnalisés
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Navbar Bootstrap responsive (NavLink actif)
│   │   └── Footer.jsx        # Pied de page (3 colonnes)
│   └── ui/
│       └── Modal.jsx         # Modale réutilisable (profil GitHub)
└── pages/
    ├── Home.jsx              # Accueil : Hero + À propos + Compétences + Modale GitHub
    ├── Services.jsx          # Services : 3 cards Bootstrap
    ├── Portfolio.jsx         # Réalisations : 6 projets en cards
    ├── Contact.jsx           # Contact : formulaire + coordonnées + Google Map
    └── Legal.jsx             # Mentions légales : accordéon Bootstrap (noindex)
public/
└── img/
    ├── hero-bg.jpg           # Image de fond du Hero
    ├── banner.jpg            # Bannière des pages internes
    └── john-doe-about.jpg    # Photo de la section À propos
```

## Technologies utilisées

- **React 18** - Librairie UI (hooks: useState, useEffect)
- **React Router DOM v6** - Routage SPA (NavLink, Routes, Route)
- **Bootstrap 5** - Framework CSS responsive
- **Bootstrap Icons** - Icônes
- **GitHub API** - Récupération du profil GitHub (https://api.github.com/users/github-johndoe)

## Fonctionnalités

- Navigation responsive avec menu hamburger (mobile/tablette)
- Lien actif mis en évidence dans la navbar (gras + souligné)
- Hero pleine page avec overlay et modale GitHub
- Progress bars pour les compétences
- Cards avec effets hover (fond + ombre)
- Formulaire de contact avec validation HTML5
- Accordéon Bootstrap pour les mentions légales
- Page mentions légales non indexée (meta noindex injectée dynamiquement)
- Footer avec icônes réseaux sociaux (GitHub, Twitter, LinkedIn)
- SEO : meta description, lang="fr", attributs aria
