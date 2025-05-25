---
sidebar_position: 2
---

# Servicio de Entregas y Warehouse Management

Este servicio maneja las operaciones relacionadas con entregas, alistamientos y gestión de almacén.

## Configuración Base

```javascript
baseURL: 'https://lilix.ceramicaitalia.com:3001'
headers: { 'Content-Type': 'application/json' }
```

## Servicios de Información de Despachos

### getEntregas
Obtiene la lista de entregas para alistamiento.

```typescript
getEntregas(user: string): Promise<AxiosResponse>
```

### getEntregaStatus
Obtiene el estado detallado de una entrega.

```typescript
getEntregaStatus(entrega: string): Promise<AxiosResponse>
```

### getEntregaAcumulada
Obtiene información acumulada de una entrega.

```typescript
getEntregaAcumulada(entrega: string, posot: string, ot: string): Promise<AxiosResponse>
```

### indicadorDespacho
Obtiene indicadores de despacho para un punto de expedición.

```typescript
indicadorDespacho(ptoExpedicion: string): Promise<AxiosResponse>
```

### facturaEntrega
Genera la factura para una entrega.

```typescript
facturaEntrega(entrega: string, categoriaDocumento: string): Promise<AxiosResponse>
```

## Servicios de Warehouse Management (WM)

### GetInfoPallet
Obtiene información detallada de un pallet.

```typescript
GetInfoPallet(pallet: string): Promise<AxiosResponse>
```

### RegistryPicking
Registra una operación de picking.

```typescript
RegistryPicking(
  entrega: string,
  posicion: string,
  material: string,
  lote: string,
  consestib: string,
  cantbuena: string,
  cantrotura: string,
  UMBASE: string,
  usuario: string,
  bandera: string,
  IDX: string,
  POSOT: string,
  OT: string,
  TPLECTURA: string
): Promise<AxiosResponse>
```

### GetInfoLocationMaterialBach
Obtiene información de ubicación de material por lote.

```typescript
GetInfoLocationMaterialBach(material: string, lote: string, pallet: string): Promise<AxiosResponse>
```

### MoveMaterial
Realiza movimientos de materiales dentro del mismo centro.

```typescript
MoveMaterial(
  material: string,
  lote: string,
  pallet: string,
  cantidad: string,
  ubicacionOrigen: string,
  ubicacionDestino: string
): Promise<AxiosResponse>
```

### MoveMaterialStores
Realiza movimientos de materiales entre diferentes centros.

```typescript
MoveMaterialStores(
  material: string,
  lote: string,
  pallet: string,
  cantidad: string,
  ubicacionOrigen: string,
  ubicacionDestino: string,
  centroOrigen: string,
  centroDestino: string,
  almacenOrigen: string,
  almacenDestino: string
): Promise<AxiosResponse>
```

### SerachLocationStockAvailable
Busca ubicaciones con stock disponible.

```typescript
SerachLocationStockAvailable(ubicacionOrigen: string): Promise<AxiosResponse>
```

### ClearLocationStockAvailable
Limpia o actualiza el stock disponible en una ubicación.

```typescript
ClearLocationStockAvailable(ubicacionOrigen: string, ubicacionDestino: string): Promise<AxiosResponse>
```