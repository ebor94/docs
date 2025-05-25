---
sidebar_position: 1
---

# Configuración del Router

## Descripción General
El archivo `index.js` en la carpeta router configura todas las rutas de la aplicación utilizando Vue Router. Define la navegación y el control de acceso a las diferentes vistas del sistema.

## Configuración Base
```js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...]
})
```

## Rutas Principales

### Autenticación y Menú
| Ruta | Nombre | Componente | Descripción |
|------|--------|------------|-------------|
| `/` | login | LoginView | Página de inicio de sesión |
| `/menu` | menu | MenuView | Menú principal de la aplicación |

### Gestión de Despachos y Alistamiento
| Ruta | Nombre | Componente | Descripción |
|------|--------|------------|-------------|
| `/alistamiento` | alistamiento | ListaDespachos | Vista de lista de despachos |
| `/cargue` | cargue | CargueView | Vista de proceso de cargue |

### Picking y Entregas
| Ruta | Nombre | Componente | Descripción |
|------|--------|------------|-------------|
| `/entrega/:entrega/:action` | Lista-entrega | MaterialListaPickingView | Lista de materiales para picking |
| `/picking/scan/:entrega/:pos/:totalPos/:ot` | scan | ScanView | Escaneo para picking |

### Traslados y Ubicaciones
| Ruta | Nombre | Componente | Descripción |
|------|--------|------------|-------------|
| `/traslado` | traslado | TrasladosView | Gestión de traslados |
| `/traslado-lotes` | traslado-lotes | TrasladoLoteView | Traslado de lotes |
| `/consultar-ubicacion` | consultar-ubicacion | ConsultaUbicacionView | Consulta de ubicaciones |
| `/traslado-almacenes` | traslado-almacenes | TrasladosAlmView | Traslados entre almacenes |

### Consultas y Gestión
| Ruta | Nombre | Componente | Descripción |
|------|--------|------------|-------------|
| `/consultar-material` | consultar-material | ConsultaMaterialView | Consulta de materiales |
| `/ot-pendiente` | ot-pendiente | OTPendienteView | Órdenes de transporte pendientes |
| `/legalizacion` | legalizacion | LegalizacionView | Proceso de legalización |
| `/indicator` | indicator | Indicator | Indicadores y métricas |

### Ingreso de Mercancía
| Ruta | Nombre | Componente | Descripción |
|------|--------|------------|-------------|
| `/ingreso-mcia` | ingreso-mcia | IngresoMercancia | Ingreso de mercancía |
| `/ingreso-mcia-scan/:entrega/:pos` | ingreso-mcia-scan | IngresoMercanciaScan | Escaneo para ingreso |

### Otros
| Ruta | Nombre | Componente | Descripción |
|------|--------|------------|-------------|
| `/info-etiqueta` | Etiqueta | ViewEtique | Información de etiquetas |
| `/:pathMatch(.*)*` | not-found | NotFoundView | Página 404 |

## Guardias de Navegación

### Autenticación
```js
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const publicPages = ['/']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !authStore.isAuthenticated) {
    return next('/')
  }

  next()
})
```

- Verifica la autenticación antes de cada navegación
- Redirige a login si no está autenticado
- Solo permite acceso público a la página de inicio

### Manejo de Errores
```js
router.onError((error) => {
  console.error('Error de navegación:', error)
  router.push({ name: 'not-found' })
})
```

- Captura errores de navegación
- Redirige a la página 404 en caso de error

## Lazy Loading
La mayoría de las rutas utilizan carga diferida (lazy loading) para optimizar el rendimiento:
```js
component: () => import('../views/ComponentName.vue')
```

## Parámetros de Ruta

### Parámetros Dinámicos
Varias rutas utilizan parámetros dinámicos para manejar datos específicos:
- `:entrega` - ID de entrega
- `:action` - Acción a realizar
- `:pos` - Posición
- `:totalPos` - Total de posiciones
- `:ot` - Orden de transporte

## Seguridad
- Implementa control de acceso basado en autenticación
- Maneja rutas protegidas y públicas
- Redirige a login cuando es necesario

## Estructura de Archivos
El router está organizado en un único archivo que maneja todas las rutas de la aplicación, facilitando el mantenimiento y la escalabilidad.