---
sidebar_position: 7
---

# PopupForm

## Descripción
Componente de formulario en ventana emergente que combina la funcionalidad de BasePopup con un formulario estructurado.

## Props
- `show`: Boolean - Control de visibilidad del popup
- `title`: String - Título del formulario
- `fields`: Array - Configuración de campos del formulario
- `initialValues`: Object - Valores iniciales del formulario
- `submitLabel`: String - Texto del botón de envío

## Estructura de Campos
```js
// Ejemplo de configuración de campos
[
  {
    name: 'username',
    type: 'text',
    label: 'Nombre de Usuario',
    required: true,
    validation: 'required|min:3'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Correo Electrónico',
    validation: 'required|email'
  }
]
```

## Eventos
- `submit`: Emitido al enviar el formulario
- `cancel`: Emitido al cancelar
- `update:show`: Para v-model del estado de visibilidad

## Validación
- Validación de campos requeridos
- Validación de formato
- Mensajes de error personalizados

## Uso
```vue
<PopupForm
  v-model:show="showForm"
  title="Nuevo Usuario"
  :fields="formFields"
  :initial-values="defaultValues"
  @submit="handleSubmit"
/>
```