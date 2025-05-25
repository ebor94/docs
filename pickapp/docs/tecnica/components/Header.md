---
sidebar_position: 5
---

# Header

## Descripción
Componente de encabezado principal de la aplicación. Proporciona navegación y acceso a funciones principales.

## Funcionalidades
- Barra de navegación principal
- Logo y branding
- Menú de usuario
- Notificaciones
- Enlaces rápidos

## Props
- `user`: Object - Información del usuario actual
- `notifications`: Array - Lista de notificaciones
- `showMenu`: Boolean - Control de visibilidad del menú

## Slots
- `logo`: Personalización del logo
- `actions`: Acciones adicionales en el header
- `menu`: Contenido personalizado del menú

## Eventos
- `menu-click`: Emitido al hacer clic en el menú
- `notification-click`: Emitido al hacer clic en una notificación
- `profile-click`: Emitido al hacer clic en el perfil

## Uso
```vue
<Header
  :user="currentUser"
  :notifications="userNotifications"
  @menu-click="handleMenuClick"
>
  <template #logo>
    <!-- Logo personalizado -->
  </template>
</Header>
```