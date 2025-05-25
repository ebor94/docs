---
sidebar_position: 3
---

# useProgressUtils

El composable `useProgressUtils` proporciona utilidades para manejar y visualizar el progreso de operaciones, especialmente enfocado en el seguimiento de entregas y materiales.

## Características

- Cálculo de estados de progreso
- Generación de colores y estilos dinámicos
- Cálculo de estadísticas para grupos de materiales
- Validación de estados de entrega
- Integración con Tailwind CSS

## API

### Utilidades de Color y Estado

#### getColorByStatus
```typescript
const getColorByStatus = (
  acumulado: number | undefined,
  total: number
): string
```

Determina el color de fondo basado en el estado del progreso.
- Retorna clases de Tailwind CSS
- Maneja estados: cargando, completado, en progreso, no iniciado

#### getProgressText
```typescript
const getProgressText = (
  acumulado: number | undefined,
  total: number
): string
```

Genera texto descriptivo del estado de progreso.
- Estados: "Cargando...", "Excedido", "Completado", "En progreso", "Pendiente"

#### getProgressTextColor
```typescript
const getProgressTextColor = (
  acumulado: number | undefined,
  total: number
): string
```

Determina el color del texto basado en el estado.
- Retorna clases de Tailwind CSS para colores de texto

### Utilidades de Barra de Progreso

#### getProgressPercentage
```typescript
const getProgressPercentage = (
  acumulado: number | undefined,
  total: number
): number
```

Calcula el porcentaje de progreso.
- Limitado a 100% máximo
- Maneja casos especiales (undefined, total 0)

#### getProgressBarColor
```typescript
const getProgressBarColor = (
  acumulado: number | undefined,
  total: number
): string
```

Determina el color de la barra de progreso basado en el porcentaje.
- Utiliza escala de colores de Tailwind
- Diferentes colores según rangos de porcentaje

#### getProgressBarStyle
```typescript
const getProgressBarStyle = (
  acumulado: number | undefined,
  total: number
): { width: string }
```

Genera el estilo inline para la barra de progreso.

### Utilidades de Estado

#### getStatusIcon
```typescript
const getStatusIcon = (
  acumulado: number | undefined,
  total: number
): string
```

Retorna un emoji representativo del estado.

### Utilidades de Estadísticas

#### calcularEstadisticas
```typescript
const calcularEstadisticas = (
  materiales: Ref<Array<Material>>,
  getAcumuladoFn: Function
): ComputedRef<{
  total: number,
  completados: number,
  enProgreso: number,
  pendientes: number,
  porcentajeCompletado: number
}>
```

Calcula estadísticas generales para un grupo de materiales.

#### puedeTerminarEntrega
```typescript
const puedeTerminarEntrega = (
  materiales: Ref<Array<Material>>,
  getAcumuladoFn: Function,
  accion: Ref<string> | string
): ComputedRef<boolean>
```

Determina si una entrega puede ser finalizada.

## Uso

### Uso Básico

```javascript
import { useProgressUtils } from '@/composables/useProgressUtils'

export default {
  setup() {
    const { 
      getProgressText,
      getProgressBarColor,
      getProgressBarStyle 
    } = useProgressUtils()

    // Ejemplo de uso en una barra de progreso
    const barraProgreso = {
      text: getProgressText(50, 100),
      color: getProgressBarColor(50, 100),
      style: getProgressBarStyle(50, 100)
    }

    return {
      barraProgreso
    }
  }
}
```

### En la Plantilla

```vue
<template>
  <div class="progress-bar">
    <div
      :class="getProgressBarColor(acumulado, total)"
      :style="getProgressBarStyle(acumulado, total)"
    >
      {{ getProgressText(acumulado, total) }}
    </div>
    <span :class="getProgressTextColor(acumulado, total)">
      {{ getStatusIcon(acumulado, total) }}
    </span>
  </div>
</template>
```

### Cálculo de Estadísticas

```javascript
const { calcularEstadisticas } = useProgressUtils()

// En un componente
const materiales = ref([/* ... */])
const getAcumulado = (vbeln, tapos, tanum) => {
  // Función para obtener acumulado
}

const estadisticas = calcularEstadisticas(materiales, getAcumulado)
```

## Consideraciones

- Las utilidades están diseñadas para trabajar con Tailwind CSS
- Los cálculos de progreso manejan casos edge (undefined, 0, excedidos)
- Las estadísticas son reactivas (computed)
- Los colores y estilos siguen una escala visual coherente
- Se incluye manejo de estados especiales para alistamiento y cargue