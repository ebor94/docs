---
sidebar_position: 2
---

# Store de Despachos

El store de despachos maneja el estado global relacionado con los despachos y entregas utilizando Pinia.

## Estado (State)

```typescript
state: () => ({
  despachos: [],           // Lista de despachos
  entregas: [],           // Lista de entregas
  loading: false,         // Estado de carga
  error: null,           // Mensaje de error
  consEstibaManual: 100, // Contador para estiba manual
  detalleEntregas: [],   // Detalles de las entregas
})
```

## Acciones (Actions)

### fetchDespachos
Obtiene la lista de despachos del servidor.

```typescript
async fetchDespachos(): Promise<void>
```

#### Funcionalidad
- Establece loading a true y limpia errores previos
- Obtiene los despachos usando el servicio infoDespachos
- Actualiza el estado con la respuesta

### getEntregas
Procesa los despachos para obtener la lista de entregas.

```typescript
async getEntregas(): Promise<void>
```

#### Funcionalidad
- Extrae las entregas de los despachos
- Llama a getEntregasDetails para obtener detalles

### getEntregasDetails
Obtiene los detalles de todas las entregas.

```typescript
async getEntregasDetails(): Promise<void>
```

#### Funcionalidad
- Realiza peticiones paralelas para obtener detalles de cada entrega
- Actualiza el estado con la información detallada

### getConsecutivoManual
Genera un consecutivo para estiba manual.

```typescript
async getConsecutivoManual(): Promise<number>
```

#### Funcionalidad
- Decrementa y retorna el contador consEstibaManual

### updateEntregaStatus
Actualiza el estado de una entrega específica.

```typescript
async updateEntregaStatus(entrega: string): Promise<object>
```

#### Funcionalidad
- Obtiene el estado actualizado de la entrega
- Actualiza el estado en detalleEntregas
- Retorna el estado actualizado

### getEntregaStatus
Obtiene el estado actual de una entrega.

```typescript
getEntregaStatus(entrega: string): object | undefined
```

### resetStore
Reinicia el store a su estado inicial.

```typescript
resetStore(): void
```

## Getters

### despachosParaCargue
```typescript
despachosParaCargue: (state) => (accion: string) => object[]
```
Filtra los despachos por tipo de acción.

### getEstadoEntregaById
```typescript
getEstadoEntregaById: (state) => (entrega: string) => object | undefined
```
Obtiene el estado de una entrega específica.

## Uso del Store

```javascript
import { UseDespachoStore } from '@/store/despachos'

// En un componente Vue
const despachoStore = UseDespachoStore()

// Cargar despachos
await despachoStore.fetchDespachos()

// Obtener entregas
await despachoStore.getEntregas()

// Actualizar estado de una entrega
const estadoActualizado = await despachoStore.updateEntregaStatus('ENTREGA123')

// Obtener despachos filtrados
const despachosCargue = despachoStore.despachosParaCargue('ACCION1')

// Obtener estado de entrega
const estadoEntrega = despachoStore.getEstadoEntregaById('ENTREGA123')

// Reiniciar store
despachoStore.resetStore()
```