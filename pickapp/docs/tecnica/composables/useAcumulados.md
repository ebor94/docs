---
sidebar_position: 1
---

# useAcumulados

El composable `useAcumulados` proporciona funcionalidad para manejar y cachear acumulados de entregas.

## Características

- Caché reactivo de acumulados
- Obtención de acumulados con sistema de caché
- Precarga de múltiples acumulados en paralelo
- Acceso reactivo a acumulados mediante computed properties

## API

### Estado

```typescript
const acumuladosCache: Ref<Record<string, number>>
```
Cache reactivo que almacena los acumulados por clave.

### Métodos

#### getAcumulado
```typescript
const getAcumulado = async (
  entrega: string,
  posOt: string,
  ot: string
): Promise<number>
```

Obtiene el acumulado para una combinación específica de entrega, posición y OT.
- Verifica primero en caché
- Si no está en caché, hace la petición al servidor
- Almacena el resultado en caché
- Retorna 0 en caso de error

#### getAcumuladoComputed
```typescript
const getAcumuladoComputed = (
  entrega: string,
  posOt: string,
  ot: string
): ComputedRef<number | undefined>
```

Retorna una referencia computada al valor del acumulado en caché.

#### precargarAcumulados
```typescript
const precargarAcumulados = async (
  entregas: Array<{
    entrega: string,
    posOt: string,
    ot: string
  }>
): Promise<void>
```

Precarga múltiples acumulados en paralelo.

#### limpiarCache
```typescript
const limpiarCache = (): void
```

Limpia completamente el caché de acumulados.

#### estaEnCache
```typescript
const estaEnCache = (
  entrega: string,
  posOt: string,
  ot: string
): boolean
```

Verifica si un acumulado específico está en caché.

## Uso

```javascript
import { useAcumulados } from '@/composables/useAcumulados'

export default {
  setup() {
    const { 
      getAcumulado,
      getAcumuladoComputed,
      precargarAcumulados,
      limpiarCache 
    } = useAcumulados()

    // Obtener un acumulado
    const obtenerAcumulado = async () => {
      const acumulado = await getAcumulado('ENT001', 'POS1', 'OT1')
      console.log('Acumulado:', acumulado)
    }

    // Obtener referencia computada
    const acumuladoComputado = getAcumuladoComputed('ENT001', 'POS1', 'OT1')

    // Precargar múltiples acumulados
    const precargar = async () => {
      await precargarAcumulados([
        { entrega: 'ENT001', posOt: 'POS1', ot: 'OT1' },
        { entrega: 'ENT002', posOt: 'POS1', ot: 'OT2' }
      ])
    }

    // Limpiar caché cuando sea necesario
    const limpiar = () => {
      limpiarCache()
    }

    return {
      acumuladoComputado,
      obtenerAcumulado,
      precargar,
      limpiar
    }
  }
}
```

## Consideraciones

- El caché es reactivo y se mantiene mientras el componente esté montado
- Los errores de red retornan 0 como valor por defecto
- La precarga de acumulados es útil para optimizar el rendimiento
- El caché se puede limpiar manualmente cuando sea necesario