---
sidebar_position: 4
---

# GaugeChart

## Descripción
Componente de visualización que muestra un gráfico tipo gauge para representar métricas y valores en un formato circular o semicircular.

## Props
- `value`: Number - Valor actual del gauge
- `min`: Number - Valor mínimo del rango
- `max`: Number - Valor máximo del rango
- `label`: String - Etiqueta descriptiva
- `units`: String - Unidades de medida
- `colors`: Object - Configuración de colores para diferentes rangos

## Configuración
```js
// Ejemplo de configuración de colores
{
  low: '#FF0000',    // Rojo para valores bajos
  medium: '#FFFF00', // Amarillo para valores medios
  high: '#00FF00'    // Verde para valores altos
}
```

## Eventos
- `value-change`: Emitido cuando cambia el valor
- `threshold-reached`: Emitido cuando se alcanza un umbral específico

## Uso
```vue
<GaugeChart
  :value="currentValue"
  :min="0"
  :max="100"
  label="Progreso"
  units="%"
  :colors="gaugeColors"
/>
```