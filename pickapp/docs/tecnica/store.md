---
sidebar_position: 6
---

# Store (Estado Global)

La aplicación utiliza Pinia como sistema de gestión de estado. Los stores principales son:

## Store de Autenticación (auth.js)

Maneja el estado global relacionado con la autenticación:
- Estado de la sesión del usuario
- Información del usuario actual
- Tokens de autenticación
- Permisos y roles

### Acciones Principales
- Login
- Logout
- Actualización de perfil
- Verificación de permisos

## Store de Despachos (despachos.js)

Gestiona el estado global relacionado con los despachos:
- Lista de despachos
- Estado de despachos
- Filtros y búsquedas
- Métricas de despacho

### Acciones Principales
- Cargar despachos
- Actualizar estado de despacho
- Filtrar despachos
- Gestionar métricas

## Integración con Componentes

Los stores se integran con los componentes mediante:
- Composables de Pinia
- Acciones asíncronas
- Getters computados
- Estado reactivo