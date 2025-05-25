---
sidebar_position: 1
---

# Archivo Principal (main.js)

El archivo `main.js` es el punto de entrada principal de la aplicación Vue.js. Este archivo inicializa y configura los componentes principales de la aplicación.

## Configuración Principal

El archivo realiza las siguientes configuraciones:

1. **Importaciones Principales**:
   - Vue.js core (`createApp`)
   - Pinia para el manejo de estado (`createPinia`)
   - Componente principal `App.vue`
   - Router para la navegación
   - Estilos globales (`style.css`)
   - Componentes globales:
     - `LoaderComponent`
     - `BasePopup`

2. **Inicialización de la Aplicación**:
   ```js
   const app = createApp(App)
   ```

3. **Registro de Plugins y Componentes Globales**:
   - Integración de Pinia para el manejo de estado
   - Registro de componentes globales:
     - `LoaderComponent`: Componente de carga
     - `BasePopup`: Componente base para ventanas emergentes
   - Configuración del router

4. **Montaje de la Aplicación**:
   ```js
   app.mount('#app')
   ```

## Componentes Globales

### LoaderComponent
Componente global para mostrar estados de carga en la aplicación.

### BasePopup
Componente global para mostrar ventanas emergentes y modales.

## Plugins Utilizados

- **Pinia**: Sistema de manejo de estado para Vue.js
- **Vue Router**: Sistema de enrutamiento oficial para Vue.js