# Horde Agence Website

V0.1 - Site web officiel de Horde Agence - Agence de création digitale.

## Stack Technique

- **Framework**: [Astro](https://astro.build) v5.15.2
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.16
- **Animations**: Matter.js pour les animations physiques
- **Smooth Scroll**: Lenis pour une navigation fluide

## Structure du Projet

```text
/
├── public/              # Assets statiques (images, favicon)
├── src/
│   ├── assets/         # Fonts et autres assets
│   ├── components/     # Composants réutilisables
│   │   ├── Carousel.astro
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── ...
│   ├── layouts/        # Layouts de page
│   │   └── Layout.astro
│   ├── pages/          # Pages du site (routing automatique)
│   │   ├── index.astro
│   │   ├── contact.astro
│   │   └── projects/
│   ├── sections/       # Sections de page
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   └── Project.astro
│   └── styles/         # Styles globaux
│       └── global.css
└── package.json
```

## Commandes

Toutes les commandes doivent être exécutées depuis la racine du projet :

| Commande          | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Installe les dépendances                            |
| `npm run dev`     | Lance le serveur de dev sur `localhost:4321`        |
| `npm run build`   | Build le site de production dans `./dist/`          |
| `npm run preview` | Prévisualise le build en local avant déploiement    |

## Fonctionnalités

- **Design Responsive**: Adapté à tous les écrans (mobile, tablette, desktop)
- **Smooth Scroll**: Navigation fluide avec Lenis
- **Carousel Infini**: Composant carousel personnalisé avec support de slots
- **Animations Canvas**: Effets animés avec Matter.js
- **Formulaire de Contact**: Intégration avec API de contact

## Composants Clés

### Carousel
Composant de carousel infini personnalisable avec slots pour intégrer texte et SVG.

```astro
<Carousel speed={10} textColor="text-white">
  Votre texte <svg>...</svg> suite du texte
</Carousel>
```

### BackgroundCanvas
Animation de particules de pixels en arrière-plan. 

### Wrapped
Bouton stylisé avec bordures personnalisées.

## Breakpoints

- **xs**: 320px (Mobile small)
- **sm**: 640px (Mobile large)
- **md**: 1024px (Tablet)
- **lg**: 1520px (Desktop)
- **xl**: 1920px (Desktop large)
- **2xl**: 2560px (Desktop extra large)

## Déploiement

Le site est optimisé pour être déployé sur n'importe quelle plateforme supportant les sites statiques (Vercel, Netlify, etc.)

## Contact

Pour toute question ou demande, contactez-nous à hello@hordeagence.com
