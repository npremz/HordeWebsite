# Horde Agence - Site Web Officiel

Site web de Horde Agence, agence de création digitale spécialisée dans les expériences web haute performance.

## Table des matières

- [Performances & Optimisations](#performances--optimisations)
- [Stack Technique](#stack-technique)
- [SEO & Référencement](#seo--référencement)
- [Architecture](#architecture)
- [Commandes](#commandes)
- [Fonctionnalités](#fonctionnalités)
- [Composants](#composants)
- [Internationalisation](#internationalisation)
- [Déploiement](#déploiement)

## Performances & Optimisations

Le site est conçu pour offrir des performances optimales et une expérience utilisateur fluide :

### Scores de performance
- **Vitesse de chargement ultra-rapide** grâce à l'architecture Astro
- **CSS optimisé** avec Tailwind CSS (génération JIT, purge automatique)
- **JavaScript minimal** : hydratation partielle et components islands
- **Images optimisées** : formats modernes et chargement lazy

### Optimisations techniques
- **Server-Side Rendering (SSR)** pour un premier rendu instantané
- **Preload des fonts critiques** : WOFF2 préchargées pour éviter le FOIT
- **Smooth scrolling natif** avec Lenis pour une navigation fluide 60fps
- **Code splitting automatique** par page et composant
- **Compression et minification** en production

## Stack Technique

### Core
- **[Astro](https://astro.build)** v5.15.2 - Framework hybride SSR/SSG ultra-performant
- **[Tailwind CSS](https://tailwindcss.com)** v4.1.16 - Framework CSS utility-first
- **[Node.js Adapter](https://docs.astro.build/en/guides/integrations-guide/node/)** - Mode standalone SSR

### Librairies
- **[Lenis](https://lenis.studiofreight.com/)** v1.3.15 - Smooth scroll haute performance
- **[Matter.js](https://brm.io/matter-js/)** v0.20.0 - Moteur physique 2D pour animations
- **[Resend](https://resend.com/)** v6.5.2 - Service d'envoi d'emails transactionnels

## SEO & Référencement

Le site implémente les meilleures pratiques SEO pour un référencement optimal :

### Meta tags & Balisage
- **Composant SEO dédié** avec gestion centralisée des meta tags
- **Meta descriptions** personnalisées par page
- **Open Graph tags** pour le partage sur réseaux sociaux (Facebook, LinkedIn)
- **Twitter Cards** pour un aperçu enrichi sur Twitter/X
- **Canonical URLs** pour éviter le contenu dupliqué

### SEO Technique
- **Sitemap XML automatique** généré pour tous les contenus
- **Balises hreflang** pour le référencement multilingue (FR/EN)
- **Schema.org / JSON-LD** - Données structurées pour les moteurs de recherche
  - Type: Organization
  - Informations de contact
  - Langues disponibles
- **URLs sémantiques** et structure claire
- **Support robots.txt** et meta robots

### Performance SEO
- **Core Web Vitals optimisés** (LCP, FID, CLS)
- **Mobile-first responsive design**
- **Accessibilité (A11y)** : structure HTML sémantique
- **Temps de chargement minimal** grâce à Astro

## Architecture

### Structure du projet

```text
/
├── public/                     # Assets statiques
│   ├── fonts/                 # Polices custom (WOFF2)
│   ├── meta.jpg              # Image OG par défaut
│   └── favicon.svg
├── src/
│   ├── components/            # Composants Astro réutilisables
│   │   ├── Seo.astro         # Gestion SEO centralisée
│   │   ├── Header.astro      # En-tête du site
│   │   ├── Footer.astro      # Pied de page (wrapper)
│   │   ├── FooterFr.astro    # Version française
│   │   ├── FooterEn.astro    # Version anglaise
│   │   ├── Carousel.astro    # Carousel infini
│   │   ├── ContactForm.astro # Formulaire de contact
│   │   ├── BackgroundCanvas.astro  # Animation Canvas
│   │   ├── Wrapped.astro     # Bouton stylisé
│   │   ├── Weather.astro     # Widget météo
│   │   └── ...
│   ├── sections/              # Sections de pages modulaires
│   │   ├── Hero.astro        # Section hero
│   │   ├── Services.astro    # Section services
│   │   ├── Project.astro     # Section projet
│   │   └── Physics.astro     # Section avec animations physiques
│   ├── templates/             # Templates de pages réutilisables
│   │   ├── IndexPage.astro   # Template page d'accueil
│   │   ├── ContactPage.astro # Template page contact
│   │   ├── ProjectsPage.astro # Template liste projets
│   │   ├── BelgaProjectPage.astro # Template projet Belga
│   │   └── CookiePolicyPage.astro # Template politique cookies
│   ├── layouts/               # Layouts globaux
│   │   └── Layout.astro      # Layout principal avec SEO et smooth scroll
│   ├── pages/                 # Pages et routing
│   │   ├── index.astro       # Page d'accueil (FR)
│   │   ├── contact.astro     # Page contact (FR)
│   │   ├── politique-des-cookies.astro
│   │   ├── projects/
│   │   │   ├── index.astro   # Liste des projets
│   │   │   └── belga.astro   # Projet Belga
│   │   ├── en/               # Pages anglaises
│   │   │   ├── index.astro
│   │   │   ├── contact.astro
│   │   │   ├── cookie-policy.astro
│   │   │   └── projects/
│   │   ├── api/              # API Routes
│   │   │   └── contact.ts    # Endpoint formulaire contact
│   │   └── 404.astro         # Page erreur 404
│   ├── i18n/                  # Internationalisation
│   │   ├── ui.ts             # Traductions
│   │   └── utils.ts          # Utilitaires i18n
│   └── styles/
│       └── global.css        # Styles globaux + Tailwind
├── astro.config.mjs          # Configuration Astro
├── tailwind.config.js        # Configuration Tailwind
└── package.json
```

### Patterns architecturaux

- **Components Islands** : Hydratation partielle et sélective
- **Template Pattern** : Templates réutilisables pour les pages
- **Composition** : Sections modulaires assemblées dans les templates
- **API Routes** : Endpoints serverless pour fonctionnalités backend
- **Layout System** : Layout unique avec props pour personnalisation

## Commandes

Toutes les commandes doivent être exécutées depuis la racine du projet :

| Commande          | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Installe les dépendances                            |
| `npm run dev`     | Lance le serveur de dev sur `localhost:4321`        |
| `npm run build`   | Build le site de production dans `./dist/`          |
| `npm run preview` | Prévisualise le build en local avant déploiement    |

## Fonctionnalités

### Expérience utilisateur
- **Design Responsive** : Optimisé pour tous les écrans (mobile, tablette, desktop)
- **Smooth Scroll** : Navigation fluide 60fps avec Lenis
- **Animations performantes** : Animations Canvas avec Matter.js

### Fonctionnalités techniques
- **Multilingue (i18n)** : Français et Anglais avec routing automatique
- **Formulaire de contact** : API serverless avec validation et envoi email
- **Sitemap automatique** : Génération dynamique pour tous les contenus
- **Pages projets dynamiques** : Système de templates pour portfolio

## Composants

### Carousel
Composant de carousel infini avec défilement automatique et support de contenu mixte (texte + SVG).

**Utilisation :**
```astro
<Carousel speed={10} textColor="text-white">
  Texte • <svg>...</svg> • Suite du texte
</Carousel>
```

**Props :**
- `speed` : Vitesse du défilement (défaut: 10)
- `textColor` : Classe Tailwind pour la couleur (défaut: text-white)

### BackgroundCanvas
Animation de particules interactives en arrière-plan avec Matter.js.

### Wrapped
Bouton stylisé avec bordures dynamiques et effets hover personnalisés.

### Seo
Composant de gestion centralisée du SEO avec support complet des meta tags.

**Props :**
- `title` : Titre de la page (requis)
- `description` : Meta description (requis)
- `image` : Image Open Graph (défaut: /meta.jpg)
- `noIndex` : Désactiver l'indexation (défaut: false)

### Weather
Widget météo interactif affichant les conditions actuelles.

## Internationalisation

Le site supporte le français (FR) et l'anglais (EN) avec :

- **Routing automatique** : `/` pour FR, `/en/` pour EN
- **Détection de langue** : Via URL pathname
- **Balises hreflang** : Pour indiquer les versions linguistiques aux moteurs
- **Traductions centralisées** : Fichier `src/i18n/ui.ts`
- **URLs alternatives** : Liens vers les versions traduites dans le SEO

### Langues disponibles
- Français (FR) - Langue par défaut
- Anglais (EN)

## Breakpoints Responsive

Le design s'adapte à tous les formats d'écran :

| Breakpoint | Largeur  | Cible                |
| :--------- | :------- | :------------------- |
| **xs**     | 320px    | Mobile small         |
| **sm**     | 640px    | Mobile large         |
| **md**     | 1024px   | Tablette             |
| **lg**     | 1520px   | Desktop              |
| **xl**     | 1920px   | Desktop large        |
| **2xl**    | 2560px   | Desktop extra large  |

## Déploiement

Le site utilise le mode **SSR (Server-Side Rendering)** avec l'adapter Node.js en mode standalone.

### Plateformes compatibles
- Tout serveur Node.js

### Configuration requise
- Node.js 18.x ou supérieur
- Support des fonctions serverless (pour l'API contact)

### Variables d'environnement
```bash
# Pour l'envoi d'emails via Resend
RESEND_API_KEY=your_api_key
```

## Contact & Support

Pour toute question, demande ou projet :
- **Email** : hello@hordeagence.com
- **Site** : https://www.hordeagence.com

---

**Version** : 0.2.1
**License** : Propriétaire - Horde Agence © 2025
