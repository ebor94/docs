---
sidebar_position: 1
---

# Store de Autenticación

El store de autenticación maneja el estado global relacionado con la autenticación de usuarios utilizando Pinia.

## Estado (State)

```typescript
state: () => ({
  user: null,              // Usuario actual
  nameUser: null,          // Nombre del usuario
  token: null,             // Token de autenticación
  isAuthenticated: false,  // Estado de autenticación
  loading: false,          // Estado de carga
  ptoExpedicion: null,     // Punto de expedición
  almaceMM: null,          // Almacén
  error: null             // Mensaje de error
})
```

## Acciones (Actions)

### login
Realiza el proceso de autenticación del usuario.

```typescript
async login(username: string, password: string): Promise<boolean>
```

#### Funcionalidad
- Establece loading a true y limpia errores previos
- Realiza la petición de login usando authService
- Si es exitoso:
  - Actualiza el estado con la información del usuario
  - Almacena datos en localStorage
  - Retorna true
- Si falla:
  - Lanza un error con el mensaje correspondiente

### logout
Cierra la sesión del usuario.

```typescript
logout(): void
```

#### Funcionalidad
- Limpia el estado de autenticación
- Elimina datos del localStorage

### checkAuth
Verifica si existe una sesión activa.

```typescript
checkAuth(): void
```

#### Funcionalidad
- Verifica datos de autenticación en localStorage
- Restaura la sesión si existe información válida

## Getters

### currentUser
```typescript
currentUser: (state) => state.user
```
Retorna el usuario actual.

### isLoading
```typescript
isLoading: (state) => state.loading
```
Retorna el estado de carga.

### hasError
```typescript
hasError: (state) => state.error
```
Retorna el mensaje de error si existe.

## Uso del Store

```javascript
import { useAuthStore } from '@/store/auth'

// En un componente Vue
const authStore = useAuthStore()

// Login
try {
  await authStore.login('usuario', 'contraseña')
  // Redirigir o manejar login exitoso
} catch (error) {
  // Manejar error
}

// Logout
authStore.logout()

// Verificar autenticación
authStore.checkAuth()

// Acceder a getters
const usuario = authStore.currentUser
const cargando = authStore.isLoading
const error = authStore.hasError
```