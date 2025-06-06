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
        {
          type: 'category',
          label: 'Operaciones Principales',
          items: [
            {
              type: 'category',
              label: 'Alistamiento',
              items: [
                'usuario/ListadoDespachos', // página principal
                'usuario/EstadoEntregas',
                'usuario/Gestion-entrega',
                'usuario/DetalleEntregas',
                'usuario/NovedadesEnterga',
                
                 // subpágina (ya la tienes creada según el error anterior)
                // Puedes agregar más subpáginas aquí
              ],
            },
            'usuario/cargue',            
            'usuario/ingreso-mercancia', 
          ],
        },
        {
          type: 'category',
          label: 'Gestión de Ubicaciones',
          items: [
            'usuario/traslado-ubicacion',
            'usuario/consultar-ubicacion',
            'usuario/traslado-almacenes',
          ],
        },
        {
          type: 'category',
          label: 'Consultas y Validaciones',
          items: [
            'usuario/consultar-material',
            'usuario/validar-etiqueta',
            'usuario/ot-pendiente',
          ],
        },
        {
          type: 'category',
          label: 'Reportes e Indicadores',
          items: [
            'usuario/indicador-despacho'
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Documentación técnica',
      items: [
        'tecnica/index',
        {
          type: 'category',
          label: 'Arquitectura',
          items: [
            'tecnica/main',
            'tecnica/app',
          ],
        },
        {
          type: 'category',
          label: 'Core',
          items: [
            'tecnica/autenticacion',
            'tecnica/rutas',
            'tecnica/store',
            'tecnica/services',
          ],
        },
        {
          type: 'category',
          label: 'UI Components',
          items: [
            'tecnica/components',
            {
              type: 'autogenerated',
              dirName: 'tecnica/components',
            },
          ],
        },
        {
          type: 'category',
          label: 'Composables',
          items: [
            {
              type: 'autogenerated',
              dirName: 'tecnica/composables',
            },
          ],
        },
        {
          type: 'category',
          label: 'Vistas',
          items: [
            'tecnica/views',
            {
              type: 'autogenerated',
              dirName: 'tecnica/views',
            },
          ],
        },
      ],
    },
  ],
};