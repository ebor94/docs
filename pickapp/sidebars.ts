import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Guía de usuario',
      items: [
        'usuario/intro',
        'usuario/login',
        'usuario/menu',
        'usuario/alistamiento',
        // ...agrega aquí el resto de las secciones de usuario
      ],
    },
    {
      type: 'category',
      label: 'Documentación técnica',
      items: [
        'tecnica/rutas',
        'tecnica/autenticacion',
        // ...agrega aquí el resto de las secciones técnicas
      ],
    },
  ],
};
