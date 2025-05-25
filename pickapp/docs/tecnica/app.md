---
sidebar_position: 2
---

# Componente Principal (App.vue)

El componente `App.vue` es el componente raíz de la aplicación. Define la estructura base y el layout principal de la aplicación.

## Estructura del Componente

### Template
```vue
<template>
  <div class="min-h-screen bg-italia-red">
    <ConnectionAlert />
    <RouterView />
  </div>
</template>
```

El template principal contiene:
- Un contenedor principal con altura mínima de pantalla completa
- Fondo rojo (tema Italia)
- Componente `ConnectionAlert` para mostrar alertas de conexión
- `RouterView` para renderizar las rutas de la aplicación

### Componentes Utilizados
- **ConnectionAlert**: Componente para mostrar alertas relacionadas con el estado de la conexión
- **RouterView**: Componente de Vue Router para renderizar las vistas basadas en la ruta actual

### Estilos
El componente utiliza clases de Tailwind CSS para el estilado:
- `min-h-screen`: Asegura que el contenido ocupe al menos la altura completa de la pantalla
- `bg-italia-red`: Color de fondo personalizado (tema Italia)

## Funcionalidad
Este componente actúa como el contenedor principal de la aplicación, proporcionando:
1. Layout base consistente
2. Sistema de alertas de conexión
3. Contenedor para las vistas enrutadas