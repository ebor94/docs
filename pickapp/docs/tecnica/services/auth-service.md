---
sidebar_position: 1
---

# Servicio de Autenticación

El servicio de autenticación proporciona funcionalidades para la gestión de sesiones de usuario en la aplicación.

## Configuración Base

El servicio utiliza Axios para realizar peticiones HTTP con la siguiente configuración base:

```javascript
baseURL: 'https://lilix.ceramicaitalia.com:3001'
headers: {
  'Content-Type': 'application/json'
}
```

## Métodos Disponibles

### login

Realiza la autenticación del usuario en el sistema.

```typescript
login(usuario: string, contraseña: string): Promise<any>
```

#### Parámetros
- `usuario`: Nombre de usuario
- `contraseña`: Contraseña del usuario

#### Ejemplo de uso

```javascript
try {
  const resultado = await authService.login('usuario123', 'contraseña123');
  // Manejar la respuesta
} catch (error) {
  // Manejar el error
}
```

#### Endpoint
- POST `/transporte/sesionwm/`

#### Payload
```javascript
{
  usuario: string,
  contraseña: string,
  bandera: "SESSION"
}
```