---
sidebar_position: 3
---

# Servicio de Productos

Este servicio maneja las operaciones relacionadas con la información de productos y etiquetas.

## Configuración Base

```javascript
baseURL: 'https://lilix.ceramicaitalia.com:3001'
headers: { 'Content-Type': 'application/json' }
```

## Servicios de Información de Estiba

### getInfoEtiqueta
Obtiene información básica de una etiqueta por número de pallet.

```typescript
getInfoEtiqueta(pallet: string): Promise<AxiosResponse>
```

#### Endpoint
- GET `/producto/etiqueta/${pallet}`

### getInfoEtiquetaFull
Obtiene información completa y detallada de una etiqueta por número de pallet.

```typescript
getInfoEtiquetaFull(pallet: string): Promise<AxiosResponse>
```

#### Endpoint
- GET `/producto/etiqueta-info/${pallet}`

## Uso de los Servicios

```javascript
// Ejemplo de uso para obtener información de etiqueta
try {
  const resultado = await infoEstiba.getInfoEtiqueta('PALLET123');
  // Manejar la respuesta
} catch (error) {
  // Manejar el error
}

// Ejemplo de uso para obtener información completa de etiqueta
try {
  const resultado = await infoEstiba.getInfoEtiquetaFull('PALLET123');
  // Manejar la respuesta
} catch (error) {
  // Manejar el error
}
```