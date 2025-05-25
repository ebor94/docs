---
sidebar_position: 9
---

# TrasladoModal

## Descripción
Componente modal específico para gestionar operaciones de traslado de mercancía.

## Props
- `show`: Boolean - Control de visibilidad del modal
- `item`: Object - Datos del ítem a trasladar
- `locations`: Array - Lista de ubicaciones disponibles
- `type`: String - Tipo de traslado

## Estructura de Datos
```js
// Estructura del ítem
{
  id: String,
  name: String,
  currentLocation: String,
  quantity: Number,
  // ... otros datos relevantes
}

// Estructura de ubicaciones
[
  {
    id: String,
    name: String,
    capacity: Number,
    available: Boolean
  }
]
```

## Eventos
- `confirm`: Emitido al confirmar el traslado
- `cancel`: Emitido al cancelar la operación
- `location-select`: Emitido al seleccionar una ubicación
- `update:show`: Para v-model del estado de visibilidad

## Validaciones
- Verificación de capacidad disponible
- Validación de cantidades
- Comprobación de compatibilidad de ubicaciones

## Uso
```vue
<TrasladoModal
  v-model:show="showModal"
  :item="selectedItem"
  :locations="availableLocations"
  type="internal"
  @confirm="handleTraslado"
/>
```

## Estados del Traslado
- Pendiente
- En proceso
- Completado
- Cancelado