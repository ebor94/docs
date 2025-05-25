---
sidebar_position: 2
---

# CardListMaterial

## Descripción
Componente que muestra una lista de materiales en formato de tarjetas. Proporciona una vista organizada y detallada de los materiales.

## Props
- `materials`: Array - Lista de materiales a mostrar
- `loading`: Boolean - Estado de carga de los datos
- `showActions`: Boolean - Determina si se muestran las acciones en las tarjetas

## Eventos
- `select-material`: Emitido cuando se selecciona un material
- `action-click`: Emitido cuando se hace clic en una acción

## Estructura de Datos
```js
// Estructura esperada para cada material
{
  id: String,
  name: String,
  code: String,
  quantity: Number,
  location: String,
  // ... otros campos relevantes
}
```

## Uso
```vue
<CardListMaterial
  :materials="materialsList"
  :loading="isLoading"
  @select-material="handleMaterialSelect"
/>
```