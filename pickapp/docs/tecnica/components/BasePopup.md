---
sidebar_position: 1
---

# BasePopup

## Descripción
Componente base para ventanas emergentes (popups) en la aplicación. Proporciona una estructura consistente para mostrar contenido modal.

## Props
- `show`: Boolean - Controla la visibilidad del popup
- `title`: String - Título que se muestra en la cabecera del popup
- `width`: String - Ancho personalizado del popup (default: 'w-1/2')

## Eventos
- `close`: Emitido cuando se cierra el popup
- `update:show`: Para sincronización bidireccional del estado de visibilidad

## Slots
- `default`: Contenido principal del popup
- `header`: Contenido personalizado para la cabecera
- `footer`: Contenido personalizado para el pie del popup

## Uso
```vue
<BasePopup
  v-model:show="showPopup"
  title="Título del Popup"
>
  <template #default>
    <!-- Contenido del popup -->
  </template>
  <template #footer>
    <!-- Botones o acciones -->
  </template>
</BasePopup>
```