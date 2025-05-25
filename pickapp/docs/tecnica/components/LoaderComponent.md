---
sidebar_position: 6
---

# LoaderComponent

## Descripción
Componente de carga que muestra un indicador visual durante operaciones asíncronas.

## Props
- `loading`: Boolean - Estado de carga
- `size`: String - Tamaño del loader ('small', 'medium', 'large')
- `overlay`: Boolean - Si debe mostrar un overlay durante la carga
- `message`: String - Mensaje opcional durante la carga

## Personalización
- Diferentes estilos de animación
- Colores personalizables
- Tamaños ajustables
- Mensajes personalizados

## Eventos
- `loading-start`: Emitido cuando comienza la carga
- `loading-end`: Emitido cuando termina la carga

## Uso
```vue
<LoaderComponent
  :loading="isLoading"
  size="medium"
  :overlay="true"
  message="Cargando datos..."
/>
```

## CSS Personalizado
```css
.loader {
  /* Estilos base */
}

.loader--small {
  /* Estilos para tamaño pequeño */
}

.loader--overlay {
  /* Estilos para overlay */
}
```