---
sidebar_position: 2
---

# useLoader

El composable `useLoader` proporciona una forma simple de manejar estados de carga en la aplicación.

## Características

- Estado de carga reactivo
- Texto de carga personalizable
- Métodos para mostrar y ocultar el loader
- Fácil integración con componentes Vue

## API

### Estado

```typescript
const isLoading: Ref<boolean>
```
Estado reactivo que indica si el loader está activo.

```typescript
const loadingText: Ref<string>
```
Texto reactivo que se muestra durante la carga.

### Métodos

#### showLoader
```typescript
const showLoader = (text: string = 'Cargando...'): void
```

Muestra el loader con un texto opcional.
- Si no se proporciona texto, usa 'Cargando...' por defecto
- Establece isLoading a true
- Actualiza el texto de carga

#### hideLoader
```typescript
const hideLoader = (): void
```

Oculta el loader.
- Establece isLoading a false

## Uso

### Uso Básico

```javascript
import { useLoader } from '@/composables/useLoader'

export default {
  setup() {
    const { isLoading, loadingText, showLoader, hideLoader } = useLoader()

    const cargarDatos = async () => {
      showLoader('Cargando datos...')
      try {
        await fetchDatos()
      } finally {
        hideLoader()
      }
    }

    return {
      isLoading,
      loadingText,
      cargarDatos
    }
  }
}
```

### En la Plantilla

```vue
<template>
  <div>
    <div v-if="isLoading" class="loader">
      {{ loadingText }}
    </div>
    
    <button @click="cargarDatos">
      Cargar Datos
    </button>
  </div>
</template>
```

### Con Operaciones Asíncronas

```javascript
const realizarOperacion = async () => {
  showLoader('Procesando operación...')
  
  try {
    await operacionAsincrona()
    // Operación exitosa
  } catch (error) {
    // Manejar error
  } finally {
    hideLoader()
  }
}
```

## Ejemplos de Uso

### Con Múltiples Estados de Carga

```javascript
const { showLoader, hideLoader } = useLoader()

// Carga de usuarios
const cargarUsuarios = async () => {
  showLoader('Cargando usuarios...')
  try {
    await fetchUsuarios()
  } finally {
    hideLoader()
  }
}

// Procesamiento de datos
const procesarDatos = async () => {
  showLoader('Procesando información...')
  try {
    await procesarInformacion()
  } finally {
    hideLoader()
  }
}
```

### En un Componente de Loading Global

```vue
<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-content">
      <span class="loading-spinner"></span>
      <p>{{ loadingText }}</p>
    </div>
  </div>
</template>

<script>
import { useLoader } from '@/composables/useLoader'

export default {
  setup() {
    const { isLoading, loadingText } = useLoader()

    return {
      isLoading,
      loadingText
    }
  }
}
</script>
```

## Consideraciones

- El loader es global para toda la aplicación
- Se puede personalizar el texto de carga en cada llamada
- Es importante siempre ocultar el loader en el bloque finally
- Se puede usar en conjunto con otros composables para manejar estados de carga más complejos