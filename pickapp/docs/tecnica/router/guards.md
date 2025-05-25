---
sidebar_position: 2
---

# Guardias de Navegación

## Descripción
Los guardias de navegación son middleware que controlan y protegen el acceso a las diferentes rutas de la aplicación.

## Guardia de Autenticación

### Implementación
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

### Funcionamiento
1. Se ejecuta antes de cada navegación
2. Verifica el estado de autenticación
3. Determina si la ruta requiere autenticación
4. Redirige si es necesario

### Páginas Públicas
- Lista de páginas accesibles sin autenticación
- Por defecto solo la página de inicio ('/')
- Fácilmente extensible según necesidades

### Flujo de Control
1. Obtiene el estado de autenticación del store
2. Verifica si la ruta es pública
3. Comprueba si se requiere autenticación
4. Permite o redirige la navegación

## Manejo de Errores

### Implementación
```js
router.onError((error) => {
  console.error('Error de navegación:', error)
  router.push({ name: 'not-found' })
})
```

### Funcionalidad
- Captura errores durante la navegación
- Registra el error en consola
- Redirige a página 404

### Tipos de Errores Manejados
- Rutas no encontradas
- Errores de carga de componentes
- Errores de navegación general

## Mejores Prácticas

### Seguridad
- Verificación consistente de autenticación
- Protección de rutas sensibles
- Manejo de sesiones

### Rendimiento
- Manejo eficiente de redirecciones
- Prevención de bucles infinitos
- Optimización de carga

### Experiencia de Usuario
- Redirecciones claras
- Mensajes de error apropiados
- Manejo suave de transiciones

## Personalización

### Extensión de Guardias
```js
router.beforeEach((to, from, next) => {
  // Lógica personalizada aquí
})
```

### Guardias Adicionales
- Verificación de roles
- Control de permisos
- Validación de datos

### Configuración
- Rutas públicas personalizables
- Comportamiento de redirección ajustable
- Mensajes de error personalizados