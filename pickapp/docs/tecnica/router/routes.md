---
sidebar_position: 3
---

# Definición de Rutas

## Estructura General
Las rutas están definidas como un array de objetos de configuración que especifican cómo la aplicación debe manejar diferentes URLs.

## Rutas Base

### Login y Menú Principal
```js
{
  path: '/',
  name: 'login',
  component: LoginView
},
{
  path: '/menu',
  name: 'menu',
  component: MenuView
}
```

## Rutas de Gestión de Mercancía

### Alistamiento y Cargue
```js
{
  path: '/alistamiento',
  name: 'alistamiento',
  component: () => import('../views/ListaDespachos.vue')
},
{
  path: '/cargue',
  name: 'cargue',
  component: () => import('../views/CargueView.vue')
}
```

### Picking y Entregas
```js
{
  path: '/entrega/:entrega/:action',
  name: 'Lista-entrega',
  component: () => import('../views/picking/MaterialListaPickingView.vue')
},
{
  path: '/picking/scan/:entrega/:pos/:totalPos/:ot',
  name: 'scan',
  component: () => import('../views/picking/ScanView.vue')
}
```

## Rutas de Traslados

### Gestión de Traslados
```js
{
  path: '/traslado',
  name: 'traslado',
  component: () => import('../views/TrasladosView.vue')
},
{
  path: '/traslado-lotes',
  name: 'traslado-lotes',
  component: () => import('../views/TrasladoLoteView.vue')
},
{
  path: '/traslado-almacenes',
  name: 'traslado-almacenes',
  component: () => import('../views/TrasladosAlmView.vue')
}
```

## Rutas de Consulta

### Ubicaciones y Materiales
```js
{
  path: '/consultar-ubicacion',
  name: 'consultar-ubicacion',
  component: () => import('../views/ConsultaUbicacionView.vue')
},
{
  path: '/consultar-material',
  name: 'consultar-material',
  component: () => import('../views/ConsultaMaterialView.vue')
}
```

## Rutas de Gestión de Órdenes

### Órdenes de Transporte
```js
{
  path: '/ot-pendiente',
  name: 'ot-pendiente',
  component: () => import('../views/OTPendienteView.vue')
},
{
  path: '/orden-transporte/:entrega',
  name: 'orden-transporte',
  component: () => import('../views/OrdenTransporteView.vue')
}
```

## Rutas de Ingreso

### Ingreso de Mercancía
```js
{
  path: '/ingreso-mcia',
  name: 'ingreso-mcia',
  component: () => import('../views/IngresoMercancia.vue')
},
{
  path: '/ingreso-mcia-scan/:entrega/:pos',
  name: 'ingreso-mcia-scan',
  component: () => import('../views/IngresoMercanciaScan.vue')
}
```

## Rutas Adicionales

### Utilidades y Sistema
```js
{
  path: '/indicator',
  name: 'indicator',
  component: () => import('../views/Indicator.vue')
},
{
  path: '/info-etiqueta',
  name: 'Etiqueta',
  component: () => import('../views/ViewEtique.vue')
},
{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView
}
```

## Parámetros de Ruta

### Parámetros Dinámicos
Los parámetros dinámicos se utilizan en varias rutas para manejar datos específicos:

- `:entrega` - Identificador de entrega
  - Usado en: `/entrega/:entrega/:action`, `/orden-transporte/:entrega`
  
- `:action` - Acción específica
  - Usado en: `/entrega/:entrega/:action`
  
- `:pos` - Posición
  - Usado en: `/picking/scan/:entrega/:pos/:totalPos/:ot`
  
- `:totalPos` - Total de posiciones
  - Usado en: `/picking/scan/:entrega/:pos/:totalPos/:ot`
  
- `:ot` - Orden de transporte
  - Usado en: `/picking/scan/:entrega/:pos/:totalPos/:ot`

## Lazy Loading

### Implementación
La mayoría de las rutas utilizan carga diferida para optimizar el rendimiento:

```js
component: () => import('../views/ComponentName.vue')
```

### Beneficios
- Mejor rendimiento inicial
- Carga bajo demanda
- Optimización de recursos

## Manejo de Rutas No Encontradas

### Configuración 404
```js
{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView
}
```

### Funcionamiento
- Captura todas las rutas no definidas
- Redirige a la vista NotFound
- Mejora la experiencia de usuario